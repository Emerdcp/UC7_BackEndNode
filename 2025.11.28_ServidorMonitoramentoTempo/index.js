const express = require("express")
const app = express()

app.get("/status", function(req, res){
    res.send("Serviço Operacional")
})

app.get("/horaatual", function(req, res){
    res.send("22:21 - hora de ir embora")
})

app.listen(3000)


// http://localhost:3000/