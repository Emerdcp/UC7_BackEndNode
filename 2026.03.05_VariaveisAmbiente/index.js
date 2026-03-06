require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Oi')
})

console.log(process.env.PORTA)

app.listen(process.env.PORTA)
