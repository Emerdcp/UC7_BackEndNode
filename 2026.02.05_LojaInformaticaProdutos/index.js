const mysql = require('mysql')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send ('ZecaInfo')
})

// conexão servidor guto
// Read All - [GET] / produtos

const conexao = mysql.createConnection({
    host: '108.179.193.209',
    user: 'gutoxa27_alunos',
    password: 'JD_eXLNHp1ZG',
    database: 'gutoxa27_bd_loja'
})
 
// conexão local
// const conexao = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bd_loja'
// })

conexao.connect(function(erro){
    if(erro){
        console.log("deu ruim na conexão \n");
        throw erro;
    }else{
        console.log("Conexão deu bom \n")
    }
})

app.get("/produtos", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    // res.send(lista_produtos)
    conexao.query("SELECT * FROM produtos", function (erro, lista_produtos, campos){
        console.log(erro)
        console.log(lista_produtos);
        res.send(lista_produtos)
    })
})


app.get("/unidades", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query("SELECT * FROM unidades", 
        function (erro, unidade, campos){
        console.log(erro)
        console.log(unidade);
        res.send(unidade)
    })
})

//Read by categoria - [GET]/produtos/:categoria
app.get("/produtos/:categoria", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    //pegamos a categoria que foi enviada na requisição
    const categoria = req.params.categoria
    conexao.query(`SELECT * FROM produtos where categoria='${categoria}'`, 
        function(erro, dados, campos){
            res.send(dados)
    })
})

app.get("/produtos/:categoria/:preco", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    const categoria = req.params.categoria
    const preco = req.params.preco
    conexao.query(`SELECT * FROM produtos where categoria='${categoria}' ORDER BY ${preco}`,
        function(erro, dados, campo){
            res.send(dados)
        }
    )
})

app.get("/produtos/:categoria/:titulo", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    const categoria = req.params.categoria
    const titulo = req.params.titulo
    conexao.query(`SELECT * FROM produtos where categoria='${categoria}' ORDER BY ${titulo}`,
        function(erro, dados, campo){
            res.send(dados)
        }
    )
})





// app.get("/produtos", function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const ordem = req.query.ordem
//     const colunasPermitidas = ["preco", "titulo"]
//     const coluna = colunasPermitidas.includes(ordem) ? ordem : "titulo"

//     conexao.query(`SELECT * FROM produtos ORDER BY ${coluna}`, (erro, dados) => {
//         if (erro) return res.status(500).send({ erro: erro.message })
//         res.send(dados)
//     })
// })


app.listen (3000)

