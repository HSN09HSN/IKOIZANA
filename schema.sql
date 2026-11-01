-- ============================================================
-- schema.sql — À coller dans Supabase → SQL Editor → Run
-- Crée la table des joueurs, la sécurité (RLS) et les fonctions XP.
-- ============================================================

-- 1) Table des profils (1 ligne par joueur, liée à auth.users)
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text not null default 'Joueur',
  xp         integer not null default 0 check (xp >= 0),
  created_at timestamptz not null default now()
);

-- 2) Sécurité : chacun ne voit et ne modifie que SON profil
alter table public.profiles enable row level security;

drop policy if exists "lire son profil" on public.profiles;
create policy "lire son profil" on public.profiles
  for select to authenticated using (auth.uid() = id);

drop policy if exists "modifier son nom" on public.profiles;
create policy "modifier son nom" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Le navigateur ne peut modifier que la colonne "name" (jamais "xp" directement)
revoke update on public.profiles from authenticated;
grant  update (name) on public.profiles to authenticated;

-- 3) Création automatique du profil à l'inscription
--    Lit le nom et l'XP de la démo envoyés par auth.js (plafonné à 1000)
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  xp_init integer := 0;
begin
  begin
    xp_init := least(greatest(coalesce((new.raw_user_meta_data->>'xp_demo')::integer, 0), 0), 1000);
  exception when others then
    xp_init := 0;
  end;

  insert into public.profiles (id, name, xp)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data->>'name', ''),
             nullif(new.raw_user_meta_data->>'full_name', ''),
             'Joueur'),
    xp_init
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4) +XP : 1 à 200 par appel, uniquement pour le joueur connecté
create or replace function public.add_xp(amount integer)
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'Non connecté'; end if;
  if amount is null or amount < 1 or amount > 200 then raise exception 'Montant invalide'; end if;
  update public.profiles set xp = xp + amount where id = auth.uid();
end;
$$;

-- 5) Récupérer l'XP de la démo après une connexion Google (seulement si le joueur est à 0 XP)
create or replace function public.claim_demo_xp(amount integer)
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'Non connecté'; end if;
  if amount is null or amount < 1 or amount > 1000 then raise exception 'Montant invalide'; end if;
  update public.profiles set xp = amount where id = auth.uid() and xp = 0;
end;
$$;

revoke all on function public.add_xp(integer)        from public, anon;
revoke all on function public.claim_demo_xp(integer) from public, anon;
grant execute on function public.add_xp(integer)        to authenticated;
grant execute on function public.claim_demo_xp(integer) to authenticated;
