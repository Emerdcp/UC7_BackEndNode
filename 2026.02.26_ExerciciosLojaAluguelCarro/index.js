const mysql = require('mysql')
const express = require('express')
const app = express()
const cors = require('cors')
const { json } = require('body-parser')
app.use(cors())
app.use(express.json())
const bcrypt = require('bcrypt')

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

// VERIFICAÇÃO COM TABELA USUÁRIO
app.get("/agendamentos", function (req,res){
    conexao.query("SELECT * FROM agendamentos",
        function (erro, agendamento, campo) {
            console.log(erro)
            console.log(agendamento)
            res.send(agendamento)
        })
});



// CADASTRO VEÍCULOS
app.post("/veiculos/", function (req, res) {
    const dados = req.body;
    conexao.query(`
        INSERT INTO veiculos(modelo, marca, placa, categoria, valor_diaria, imagem)
            values ('${dados.modelo}', '${dados.marca}', '${dados.placa}', 
                    '${dados.categoria}', '${dados.valor_diaria}', '${dados.imagem}')`,
        function (erro, resultado) {
            if (erro) {
                res.json(erro);
            }
            res.send(resultado.insertId);
        }
    )
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




// CADASTRO USUÁRIO
app.post("/usuarios/", async function (req, res) {
    const dados = req.body;
    console.dir(dados)
    try{ 
        const senhaHash = await bcrypt.hash(dados.senha, 10)
        console.log(senhaHash)
        conexao.query(`
            INSERT INTO usuarios(nome, email, senha, nivel_acesso)
                values ('${dados.nome}', '${dados.email}', '${senhaHash}' , '${dados.nivel_acesso}')`,
            function (erro, resultado) {
                if (erro) {
                    res.json(erro);
                }
                res.send(resultado.insertId);
            }
        );
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criptografar senha" });
    }
})

// VERIFICAÇÃO COM TABELA USUÁRIO
app.get("/usuarios",(req,res)=>{
    conexao.query("SELECT * FROM usuarios",
        function (erro, usuario, campo) {
            console.log(erro)
            console.log(usuario)
            res.send(usuario)
        })

});



//LOGIN
app.post("/login", async function (req, res) {
    const { email, senha } = req.body;
    try {
        conexao.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [email],
            async function (erro, resultado) {
                if (erro) {
                    return res.status(500).json(erro);
                }
                if (resultado.length === 0) {
                    return res.status(401).json({ erro: "Usuário não encontrado" });
                }
                const usuario = resultado[0];
                const senhaValida = await bcrypt.compare(senha, usuario.senha);
                if (!senhaValida) {
                    return res.status(401).json({ erro: "Senha incorreta" });
                }
                res.json({
                    mensagem: "Login realizado com sucesso",
                    usuario: usuario.nome,
                    nivel: usuario.nivel_acesso
                });
            }
        );
    } catch (erro) {
        res.status(500).json({ erro: "Erro no servidor" });
    }
});




app.listen(3000)