require('dotenv').config()
const carros = require('./frota')//Novo
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send()
})

carros.fnListarCarros()
carros.fnCadastrarCarro({marca: 'FIAT', modelo: 'Palio'})
carros.fnListarCarros()

console.log(process.env.PORTA)

app.listen(3000)



// 1 maneira de Fazer

// require('dotenv').config()
// const carros = require('./frota')//Novo
// const express = require('express')
// const app = express()

// app.get('/', (req, res) =>{
//     res.send(carros.carro1, carros.carro2)
// })

// console.log(carros.carro1, carros.carro2)

// console.log(process.env.PORTA)
// // app.listen(process.env.PORTA)
// app.listen(3000)