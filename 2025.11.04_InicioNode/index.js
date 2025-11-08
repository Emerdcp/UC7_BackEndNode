const express = require("express")
const app = express()
app.get('/', function (req, res) {
    res.send('Hello Word')
})
app.get('/oi', function (req, res) {
    res.send('Óla, Mundo')
})

app.listen(3000)



