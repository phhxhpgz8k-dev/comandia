// Consente il traffico HTTP verso la cassa (rete locale) in modo ridondante:
// 1. attributo usesCleartextTraffic nel manifest
// 2. network_security_config.xml esplicito (ha la precedenza su tutto)
// Senza questi, Android 9+ blocca OGNI richiesta http dentro l'app ("Failed to fetch").
const fs = require('fs')
const path = require('path')

const manifest = 'android/app/src/main/AndroidManifest.xml'
if (!fs.existsSync(manifest)) {
  console.log('(cartella android non ancora generata: ok, il fix verrà rieseguito dopo)')
  process.exit(0)
}

let m = fs.readFileSync(manifest, 'utf8')
let cambiato = false
if (!m.includes('usesCleartextTraffic')) {
  m = m.replace('<application', '<application\n        android:usesCleartextTraffic="true"')
  cambiato = true
}
if (!m.includes('networkSecurityConfig')) {
  m = m.replace('<application', '<application\n        android:networkSecurityConfig="@xml/network_security_config"')
  cambiato = true
}
if (cambiato) fs.writeFileSync(manifest, m)

const xmlDir = 'android/app/src/main/res/xml'
fs.mkdirSync(xmlDir, { recursive: true })
fs.writeFileSync(path.join(xmlDir, 'network_security_config.xml'),
`<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>
`)
console.log('✓ Manifest e network security config a posto: connessioni HTTP locali consentite')
