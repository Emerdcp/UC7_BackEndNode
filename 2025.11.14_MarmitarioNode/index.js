const express = require("express")
const app = express()
app.use(express.json())

const itensCardapio = [
    {
        "id":1,
        "nome":"Marmita Delícia",
        "descricao":"arroz, feijão, batata frita, bife a cavalo",
        "foto":"https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1636805548618fabaca010a_75_75.jpeg",
        "preco":25.9
    },
    {
        "id":2,
        "nome":"Marmita Delícia",
        "descricao":"Macarrão com almondegas",
        "foto":"https://www.casaredo.com/blog/wp-content/uploads/2024/05/macarrao-parafuso-com-almondegas.jpg",
        "preco":22.9
    },
        {
        "id":3,
        "nome":"Marmita Delícia",
        "descricao":"Arroz, Batata frita e Strognoff de carne",
        "foto":"colocar url da fothttps://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/auauecia/228_6244503cdbf6d.png",
        "preco":27.9
    },
    {
        "id":5,
        "nome":"Marmita Delícia",
        "descricao":"arroz, feijão, batata frita, e parmigêana de frango",
        "foto":"https://img.cdndsgni.com/preview/11954963.jpg",
        "preco":31.9
    },
    {
        "id":6,
        "nome":"Marmita Delícia",
        "descricao":"Salada crocante",
        "foto":"https://vitat.com.br/receitas/images/recipeshandler.jpg?id=85973&tipo=r&default=s",
        "preco":24.9
    }
]


app.get('/marmitas', function(req, res) {
    res.send(itensCardapio) 
})

app.get('/marmitas/:id', function (req, res){
    let id =req.params.id
    res.send(itensCardapio[id-1])
})


app.listen(3000)  