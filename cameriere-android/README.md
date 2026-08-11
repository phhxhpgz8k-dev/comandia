# Comandia Cameriere — App Android (APK)

## Compilare (cartella nuova, da zero)

```bash
npm install
npm run android    # genera il progetto nativo + applica i permessi di rete
npm run apri       # apre Android Studio
```

In Android Studio: attendi il Gradle sync → Build → Build APK(s) →
APK in `android/app/build/outputs/apk/debug/app-debug.apk`.

## Verifica versione

Nella schermata di collegamento dell'app è indicata la versione (es. v18.1):
se dopo l'installazione vedi una versione più vecchia, è rimasto l'APK precedente.

## Se non si collega

Tocca "🔬 Diagnostica" nella schermata di collegamento: esegue i test di rete
e mostra l'errore esatto da riferire.
