const mysql = require('mysql')
const express = require('express')
const app = express()
const cors = require('cors')
const { json } = require('body-parser')
app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send ('aluguelcarro')
})


// CONEXÃO BANCO DE DADOS
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aluguelcarro'
})

conexao.connect(function (erro) {
    if (erro) {
        console.log("deu ruim na conexão \n");
        throw erro;
    } else {
        console.log("Conexão deu bom \n")
    }
})


// VERIFICAÇÃO COM TABELA VEICULOS
app.get("/veiculos", function (req, res) {
    conexao.query("SELECT * FROM veiculos",
        function (erro, veiculo, campo) {
            console.log(erro)
            console.log(veiculo)
            res.send(veiculo)
        })
})

// CADASTRO AGENDAMENTOS
app.post("/agendamentos/", function (req, res) {
    // const {nome_cliente, email_cliente, veiculo_id, categoria} = req.body;
    const dados = req.body;
    // console.log(`INSERT INTO agendamentos(nome_cliente, email_cliente, veiculo_id, categoria)
    // //     values ('${dados.nome_cliente}', '${dados.email_cliente}', '${dados.veiculo_id}', '${dados.categoria}')`)
    // return
    conexao.query(`
        INSERT INTO agendamentos(nome_cliente, email_cliente, veiculo_id, categoria)
            values ('${dados.nome_cliente}', '${dados.email_cliente}', '${dados.veiculo_id}', '${dados.categoria}')`,
        function (erro, resultado) {
            if (erro) {
                res.json(erro);
            }
            res.send(resultado.insertId);
        }
    )
})
















// const bcrypt = require("bcryptjs");

// app.post("/login", (req, res) => {

//     const { email, senha } = req.body;

//     const sql = "SELECT * FROM usuarios WHERE login = ?";

//     db.query(sql, [email], async (err, result) => {

//         if (err) {
//             return res.status(500).json({ erro: "Erro no servidor" });
//         }

//         if (result.length === 0) {
//             return res.status(401).json({ erro: "Usuário não encontrado" });
//         }

//         const usuario = result[0];

//         const senhaValida = await bcrypt.compare(senha, usuario.senha);

//         if (!senhaValida) {
//             return res.status(401).json({ erro: "Senha incorreta" });
//         }

//         res.json({
//             mensagem: "Login realizado com sucesso",
//             nivel: usuario.nivel_acesso
//         });
//     });
// });




app.listen(3000)