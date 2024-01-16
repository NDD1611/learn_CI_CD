const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/data', (req, res) => {
    res.json({
        name: 'Nguyễn Đình Đình',
        age: 23,
        address: 'Cù Lao Dung - Sóc Trăng',
        PORT: process.env.PORT,
        HOST: process.env.HOST
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})