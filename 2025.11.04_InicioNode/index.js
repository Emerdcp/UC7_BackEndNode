const express = require("express")
const app = express()
app.use(express.json());

// const herois = ['Mulher Maravilha','Lanterna Verde','Homem de Ferro']
const herois = [
    {
        "id": 1,
        "nome":'Mulher Maravilha',
        "editora": "Marvel",
        "foto": "https://img.elo7.com.br/product/zoom/17EC5F9/painel-mulher-maravilha-g-frete-gratis-painel-impresso.jpg",
        "criador": "Emerson"
    },
    {
        "id": 2,
        "nome":'Lanterna Verde',
        "editora": "Marvel",
        "foto": "https://m.media-amazon.com/images/I/611cVvZPg-L._AC_UF894,1000_QL80_.jpg",
        "criador": "Emerson"
    },
    {
        "id": 3,
        "nome":'Homem de Ferro',
        "editora": "Marvel",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFvCUVlD_TeaVPRI6wsIYEEUAAZBtl2eQn32ylYVm8W3mxzkRIgoxW6JRuGXJBOycaNk&usqp=CAU",
        "criador": "Emerson"
    }  
]

app.get('/herois', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(herois)
})

app.get('/herois/:id', function (req, res) {
    const id = req.params.id
    res.send(herois[id - 1])
})

app.post('/herois', function (req, res) {
    let novoHeroi = req.body.nome;
    herois.push(novoHeroi);
    res.send("ok")
    
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
