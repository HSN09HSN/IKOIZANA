 
// ============================================================
// auth.js — Authentification réelle IKOIZANA (Supabase Auth + table profiles)
// Chargé avec : <script type="module" src="auth.js"></script>
// Expose window.IkoAuth pour que ton index.js (non-module) puisse l'utiliser.
// ============================================================
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase-config.js";

// ---------- Une seule adresse pour tout le monde ----------
// La connexion Google se termine sur l'adresse où elle a commencé. Si des visiteurs arrivent par
// une autre adresse Vercel (ex. ikoizana-hasinirina-s-projects.vercel.app), l'état OAuth se perd
// (erreur bad_oauth_state). On les ramène donc toujours sur l'adresse officielle.
const ADRESSE_OFFICIELLE = "ikoizana-chi.vercel.app";
if (location.hostname.endsWith(".vercel.app") && location.hostname !== ADRESSE_OFFICIELLE) {
  location.replace("https://" + ADRESSE_OFFICIELLE + location.pathname + location.search + location.hash);
}
// Navigateur intégré (Facebook, Messenger, Instagram, TikTok, WebView) : Google et le stockage y échouent
const NAVIGATEUR_INTEGRE = /FBAN|FBAV|FB_IAB|Instagram|Messenger|TikTok|MicroMessenger|; wv\)/i.test(navigator.userAgent);

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Messages d'erreur lisibles (KOTO peut les prononcer) ----------
function messageErreur(e) {
  const m = (e && (e.message || "")).toLowerCase();
  const c = (e && e.code) || "";
  if (m.includes("already registered") || m.includes("already been registered") || c === "user_already_exists")
    return "Cet e-mail a déjà un compte. Essaie de te connecter.";
  if (m.includes("invalid login credentials")) return "E-mail ou mot de passe incorrect.";
  if (m.includes("email not confirmed"))       return "Confirme d'abord ton e-mail (regarde ta boîte de réception).";
  if (m.includes("password should be"))        return "Mot de passe trop faible (6 caractères minimum).";
  if (m.includes("invalid email") || m.includes("unable to validate email")) return "Cet e-mail n'est pas valide.";
  if (c === "over_email_send_rate_limit" || m.includes("rate limit") || m.includes("too many"))
    return "Trop d'e-mails envoyés ou d'essais. Réessaie dans quelques minutes.";
  if (m.includes("failed to fetch") || m.includes("network")) return "Pas de connexion internet.";
  if (m.includes("error sending") && m.includes("email"))
    return "Impossible d'envoyer l'e-mail de confirmation (SMTP non configuré ?).";
  if (m.includes("database error"))            return "Erreur serveur à la création du profil (schema.sql exécuté ?).";
  if (c === "signup_disabled" || m.includes("signups not allowed"))
    return "Les inscriptions sont désactivées.";
  // Dernier recours : on affiche la vraie cause au lieu de la cacher
  return "Erreur : " + ((e && (e.code || e.message)) || "inconnue");
}

// Enveloppe : renvoie toujours { ok, ...données } ou { ok:false, error } — pas d'exception à gérer
async function run(fn) {
  try { return { ok: true, ...(await fn()) }; }
  catch (e) { console.error(e); return { ok: false, error: messageErreur(e) }; }
}
const ouvert = (r) => { if (r.error) throw r.error; return r.data; };

// ---------- API publique ----------
const IkoAuth = {
  // Inscription e-mail + mot de passe.
  // nom = facultatif ; xpDemo = XP gagné dans la démo (plafonné à 1000 côté base).
  inscrire: (email, motDePasse, nom = "", xpDemo = 0) => run(async () => {
    const d = ouvert(await supabase.auth.signUp({
      email, password: motDePasse,
      options: {
        data: { name: nom },
        emailRedirectTo: window.location.origin
      }
    }));
    // Si la confirmation e-mail est activée (par défaut), il n'y a pas encore de session.
    return { user: d.user, confirmationRequise: !d.session };
  }),

  connecter: (email, motDePasse) => run(async () => {
    const d = ouvert(await supabase.auth.signInWithPassword({ email, password: motDePasse }));
    return { user: d.user };
  }),

  // Connexion Google (redirection). Active "Google" dans Authentication → Providers.
  // L'XP de la démo est gardé en local le temps de la redirection puis réclamé au retour.
  connecterGoogle: (xpDemo = 0) => NAVIGATEUR_INTEGRE
    ? Promise.resolve({ ok: false, error: "Pour te connecter avec Google, ouvre ce site dans Chrome ou Safari (le navigateur intégré de Facebook, WhatsApp ou Messenger ne le permet pas)." })
    : run(async () => {
    ouvert(await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    }));
    return {};
  }),

  motDePasseOublie: (email) => run(async () => {
    ouvert(await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin }));
    return {};
  }),

  deconnecter: () => run(async () => { ouvert(await supabase.auth.signOut()); return {}; }),

  // callback(user | null) : appelé au chargement puis à chaque connexion / déconnexion.
  surChangement: (callback) => {
    supabase.auth.getSession().then(({ data }) => callback(data.session ? data.session.user : null));
    return supabase.auth.onAuthStateChange((_evt, session) => callback(session ? session.user : null));
  },

  utilisateur: async () => (await supabase.auth.getUser()).data.user,

  // +n XP (1 à 200 par appel, vérifié côté base).
  ajouterXp: (n) => run(async () => {
    ouvert(await supabase.rpc("add_xp", { amount: Math.floor(n) }));
    return {};
  }),

  // Quiz vérifié par le serveur (voir ikoizana-questions-serveur.sql)
  questions: (cat, lang, n = 8) => run(async () => ({ lignes: ouvert(await supabase.rpc("qz_get", { p_category: cat, p_lang: lang, p_count: n })) })),
  repondre: (id, choix, temps) => run(async () => {
    const d = ouvert(await supabase.rpc("qz_answer", { p_id: id, p_choice: choix, p_time: temps }));
    return { res: Array.isArray(d) ? d[0] : d };
  }),
  moitie: (id) => run(async () => ({ cache: ouvert(await supabase.rpc("qz_fifty", { p_id: id })) })),
  exemple: (cat, lang) => run(async () => ({ ex: ouvert(await supabase.rpc("qz_example", { p_category: cat, p_lang: lang })) })),

  // Classement réel (prénom, photo, XP) — voir ikoizana-supabase-complet.sql
  classement: (n = 30) => run(async () => ({ lignes: ouvert(await supabase.rpc("leaderboard", { top_n: n })) })),
  // Enregistre le nom et la photo du compte dans profiles
  synchroProfil: (nom, photo) => run(async () => {
    ouvert(await supabase.rpc("sync_profile", { p_name: nom || "", p_avatar: photo || "" }));
    return {};
  }),

  // { name, xp, created_at } du joueur connecté
  lireProfil: () => run(async () => {
    const u = (await supabase.auth.getUser()).data.user;
    if (!u) throw new Error("Non connecté");
    const d = ouvert(await supabase.from("profiles").select("name, xp, created_at").eq("id", u.id).single());
    return { profil: d };
  })
};

window.IkoAuth = IkoAuth;
export default IkoAuth;

// Prévient index.js que l'auth est prête (le module se charge après les scripts normaux)
window.dispatchEvent(new Event("ikoauth-ready"));