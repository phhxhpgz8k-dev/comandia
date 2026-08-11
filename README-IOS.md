# App iOS da Windows — guida completa

Il Mac lo mette gratis GitHub (compila l'app in cloud), la firma la fai tu
da Windows con Sideloadly e il tuo Apple ID gratuito.

## Parte 1 — Compila l'IPA (una volta, poi a ogni aggiornamento)

1. Account su https://github.com (gratis)
2. New repository → nome `comandia-cameriere` → **Public** → Create
3. "uploading an existing file" → trascina TUTTO il contenuto di questa
   cartella (compresa la cartella nascosta `.github`!) → Commit
   - Se il trascinamento salta `.github`: crea il file a mano con
     "Add file → Create new file", nome `.github/workflows/ios.yml`,
     e incollaci dentro il contenuto del file
4. Scheda **Actions** → "Compila app iOS" → **Run workflow**
5. Attendi ~10 minuti → clicca sull'esecuzione → sezione **Artifacts** →
   scarica `Comandia-Cameriere-iOS` (contiene l'IPA)

## Parte 2 — Installa sull'iPhone (da Windows)

1. Installa iTunes versione Apple (NON dal Microsoft Store): apple.com/itunes
2. Installa Sideloadly: https://sideloadly.io
3. iPhone collegato via USB, sbloccato, "Autorizza questo computer"
4. Sideloadly: trascina l'IPA → inserisci il tuo Apple ID → Start
   (la password va ad Apple, non a Sideloadly; con 2FA genera una
   "password per le app" da appleid.apple.com)
5. Sull'iPhone: Impostazioni → Generali → Gestione VPN e dispositivi →
   il tuo Apple ID → **Autorizza**
6. Impostazioni → Privacy e sicurezza → **Modalità sviluppatore** → attiva → riavvia
7. Apri l'app → inserisci IP della cassa (e PIN se impostato) → fatto

## Da sapere

- L'app **scade ogni 7 giorni** (limite Apple degli account gratuiti):
  per rinnovarla ricollega l'iPhone e rifai il passo Sideloadly (1 minuto,
  l'IPA è lo stesso, i dati dell'app restano)
- Al primo avvio iOS chiede il permesso "rete locale": ACCETTA, serve
  per parlare con la cassa
- Aggiornamenti futuri dell'app: ricarica i file www/ su GitHub →
  Actions ricompila → riscarichi l'IPA → Sideloadly
