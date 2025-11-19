const express = require("express")
const app = express()
app.use(express.json())

const itensCardapio = [
    {
        "id":1,
        "nome":"Marmita: Bife a Cavalo",
        "descricao":"arroz, feijão, batata frita, bife a cavalo",
        "foto":"https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1636805548618fabaca010a_75_75.jpeg",
        "preco":25.90
    },
    {
        "id":2,
        "nome":"Marmita: Almondegas",
        "descricao":"Macarrão com almondegas",
        "foto":"https://www.casaredo.com/blog/wp-content/uploads/2024/05/macarrao-parafuso-com-almondegas.jpg",
        "preco":22.90
    },
        {
        "id":3,
        "nome":"Marmita Strognoff",
        "descricao":"Arroz, Batata frita e Strognoff de carne",
        "foto":"https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/auauecia/228_6244503cdbf6d.png",
        "preco":27.90
    },
    {
        "id":4,
        "nome":"Marmita Parmegêna",
        "descricao":"arroz, feijão, batata frita, e parmigêna de frango",
        "foto":"https://img.cdndsgni.com/preview/11954963.jpg",
        "preco":31.90
    }
]

const itensBebidas = [
    {
        "id":1,
        "nome":"Refrigerante Lata",
        "descricao":"Refrigerante Lata 350ml",
        "foto":"https://marcoluccio.com.br/wp-content/uploads/2021/03/Refrigerante.png",
        "preco":7.99
    },
    {
        "id":2,
        "nome":"Suco Lata",
        "descricao":"Suco Lata 294ml",
        "foto":"https://imagens.jotaja.com/produtos/a04385c3-66f3-41fe-a928-e6bbb5abe686.jpg",
        "preco":8.99
    },
    {
        "id":3,
        "nome":"Suco Laranja",
        "descricao":"Suco Laranja na Jarra 1 litro",
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8g9_Efb5n6EVEvh6IcFLyEyA3dDQOKjOXZMkQXrmLNTgM9b_ap1wG-8T0203TWwFy-s&usqp=CAU",
        "preco":17.99
    },
    {
        "id":4,
        "nome":"Água",
        "descricao":"Água garraga 510ml",
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbO2jkifKFLjWD2QgtAjXH-Ljcg_APIFXXkg7Vb_-UlAybiSgCnSRKtaj7f-Vzf-Pfifg&usqp=CAU",
        "preco":4.99
    }
]

const saladas = [
    {
        "id":1,
        "nome":"Salada Crocante",
        "descricao":"Salada crocante de frango com batata palha.",
        "foto":"https://vitat.com.br/receitas/images/recipeshandler.jpg?id=85973&tipo=r&default=s",
        "preco":24.90
    },
     {
        "id":2,
        "nome":"Salada de Alfaçe",
        "descricao":"Salada alfaçe com tomate e cebola.",
        "foto":"https://www.receitasnestle.com.br/sites/default/files/srh_recipes/8a0ce83f02fe162bd7480b43634f5390.jpg",
        "preco":19.90
    },
    {
        "id":3,
        "nome":"Salada simples",
        "descricao":"Salada de beterraba.",
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jjIos19MatcfiIH3rtY-HAETrK7tIQipcWO2430lLS7GWtnGi_glDjRyBexCtbY42bs&usqp=CAU",
        "preco":15.90
    },
    {
        "id":4,
        "nome":"Salada de Salpição",
        "descricao":"Salada de Salpição.",
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4dbtpuE5cpyMfgGJg_MQ6pfbaCOcQD8gshOUPxY7_FERpjmWSg6kLBas_gn3wHPDIBE&usqp=CAU",
        "preco":15.90
    }
]

app.get('/marmitas', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(itensCardapio) 
})

app.get('/marmitas/:id', function (req, res){
    let id =req.params.id
    res.send(itensCardapio[id-1])
})

app.get('/bebidas', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(itensBebidas)
})

app.get('/bebidas/:id', function(req, res){
    let id =req.params.id
    res.send(itensBebidas[id-1])
})

app.get('/saladas', function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(saladas)
})

app.get('/salsdas/:id', function(req, res){
    let id =req.params.id
    res.send(saladas[id-1])
})

app.listen(3000)  