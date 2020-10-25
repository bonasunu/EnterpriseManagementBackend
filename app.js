const express = require('express')
const app = express()
const morgan = require('morgan')
const auth = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use('/', auth)

module.exports = app
