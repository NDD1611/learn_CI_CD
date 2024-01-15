const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/data', (req, res) => {
    res.json({
        name: 'NDD',
        age: 20,
        address: 'CLD-ST',
        PORT: process.env.PORT,
        HOST: process.env.HOST
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})