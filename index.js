const app = require('./app')
const http = require('http')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, () => console.log(`Server listeng on port ${PORT}`))
