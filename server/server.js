const express = require('express')
const server = express()
const PORT = process.env.PORT || 4500

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api', require('./routes'))

server.use((err, req, res, next) => {
    res.status(500).send({ status: 500, error: err })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))