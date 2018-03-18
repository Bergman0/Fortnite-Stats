const Fortnite = require('fortnite-api')

let fortniteAPI = new Fortnite(
  ['Email', 'Password', 'Epic Games Launcher Token', 'Fortnite Token'],
  {
    debug: true
  }
)

module.exports = fortniteAPI
