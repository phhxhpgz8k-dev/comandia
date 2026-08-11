// iOS blocca di default sia l'HTTP in chiaro sia l'accesso alla rete locale.
// Senza queste chiavi nell'Info.plist l'app non si collegherà MAI alla cassa.
const fs = require('fs')
const p = 'ios/App/App/Info.plist'
if (!fs.existsSync(p)) {
  console.log('(progetto ios non ancora generato: ok)')
  process.exit(0)
}
let s = fs.readFileSync(p, 'utf8')
let cambiato = false
if (!s.includes('NSAppTransportSecurity')) {
  s = s.replace('</dict>\n</plist>', `\t<key>NSAppTransportSecurity</key>
\t<dict>
\t\t<key>NSAllowsArbitraryLoads</key><true/>
\t\t<key>NSAllowsLocalNetworking</key><true/>
\t</dict>
</dict>
</plist>`)
  cambiato = true
}
if (!s.includes('NSLocalNetworkUsageDescription')) {
  s = s.replace('</dict>\n</plist>', `\t<key>NSLocalNetworkUsageDescription</key>
\t<string>Serve per collegarsi alla cassa Comandia sulla rete WiFi del locale.</string>
</dict>
</plist>`)
  cambiato = true
}
if (cambiato) fs.writeFileSync(p, s)
console.log('✓ Info.plist a posto: rete locale e HTTP verso la cassa consentiti')
