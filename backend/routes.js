const express = require('express')
const router = express.Router()

const fortniteAPI = require('./fortniteInit')

router.get('/user/:username/:platform', (req, res) => {
  fortniteAPI
    .login()
    .then(() => {
      fortniteAPI
        .checkPlayer(req.params.username, req.params.platform)
        .then(user => {
          res.json({ user })
        })
        .catch(console.log)
    })
    .catch(console.log)
})

router.get('/stats/:username/:platform', (req, res) => {
  fortniteAPI
    .login()
    .then(() => {
      fortniteAPI
        .getStatsBR(req.params.username, req.params.platform)
        .then(stats => {
          res.json({ stats })
        })
        .catch(err => {
          res.json({ err })
        })
    })
    .catch(console.log)
})

module.exports = router
