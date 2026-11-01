# IKOIZANA — site vitrine

Site statique (HTML / CSS / JS) hébergé sur Vercel, avec authentification Supabase.

## Fichiers
- `index.html` — structure de la page
- `style.css` — tout le style
- `index.js` — icônes hors-ligne + toute la logique (KOTO, quiz, langues, sons…)
- `auth.js` — authentification Supabase (module, expose `window.IkoAuth`)
- `supabase-config.js` — URL + clé publique Supabase
- `schema.sql` — à exécuter UNE fois dans Supabase → SQL Editor

## À ajouter toi-même (non inclus dans ce zip)
- `IMG/` (art.jpg, culture_musique.png, geographie.jpg, histoire.png, monde_madagascar.png, nature.jpg, philosophie.png, reflexion_logique.png, sport.png)
- `audio/` (clic.mp3, ma-musique.mp3)
- les images de KOTO à la racine : `koto-*.webp` (ok, point, think, cheer, sad, shock, code, peace, fight, hi, sleep, love, clap, laugh, wink, wow, cry, calm)

## Mise en ligne
1. Pousse ce dossier sur un nouveau dépôt GitHub.
2. Sur Vercel : Add New → Project → importe le dépôt (Framework : Other, pas de build).
3. Supabase → Authentication → URL Configuration : ajoute l'URL Vercel du site dans « Site URL » et « Redirect URLs ».
