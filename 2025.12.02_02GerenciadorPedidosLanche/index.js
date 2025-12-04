const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("funciona")
})

let listaDePedidos = [
    {
        "id": 1,
        "cliente": "Emerson",
        "id_cliente:": 100,
        "produto": "X-Bacon",
        "valor": 29.9
    },
    {
        "id": 2,
        "cliente": "Emerson",
        "id_cliente:": 100,
        "produto": "X-EGG",
        "valor": 25.9
    },
    {
        "id": 3,
        "cliente": "Eduardo",
        "id_cliente:": 136,
        "produto": "Batata frita com queijo",
        "valor": 34.9
    }
]

//listar
app.get("/listarpedidos", function(req, res){
    res.send(listaDePedidos)
})

//listar um
app.get("/listarpedido/:id", function(req,res){
    let idInformado = req.params.id
    if(idInformado > listaDePedidos.length){//o Length vai mostrar quantos pedido tem dentro
        res.send("Pedido inválido")
    }else{
        res.send(listaDePedidos[idInformado - 1])
    }    
})

app.listen(3000)

// http://localhost:3000/