const route = require('express').Router()

route.get('/', async (req, res) => {
  res.json({ info: 'homepage' })
})

module.exports = route
