const express = require("express")
const app = express()

const herois = ['Mulher Maravilha', 'Superman', 'Batman']

app.get('/herois', function (req, res) {
    res.send(herois)
})

app.get('/herois/:id', function (req, res) {
    const id = req.params.id
    res.send(herois[id - 1])
})


app.use(express.json());

app.post('/herois', (req, res) => {
    const nomeHerois = req.body.nome;
    herois.push(nomeHerois);
    res.send(nomeHerois)
})


// Forma de fazer um POSTl
// let nome = [];
// app.post('/inserir', (req, res) => {
//     const novoNome = req.body;
//     novoNome.id = nome.length + 1;
//     nome.push(novoNome);
//     res.status(201).json({
//         mensagem: '✅ Usuário inserido com sucesso!',
//         nome: novoNome
//     });
// });

// Rota para listar os usuários já inseridos
app.get('/listar', (req, res) => {
    res.json(usuarios);
});


app.listen(3000)
