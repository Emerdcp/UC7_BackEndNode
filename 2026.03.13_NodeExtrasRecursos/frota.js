let carros = [
    {
        marca: 'Ford',
        modelo: 'Fiesta'
    },
    {
        marca: 'FIAT',
        modelo: 'Uno'
    }
]

function fnListarCarros(){
    carros.forEach(carro=>{
        console.log("Marca: " + carro.marca + " - " + "Modelo: " + carro.modelo)
    })
}


function fnCadastrarCarro(carro){
    carros.push(carro)
    console.log("Cadastrado com sucesso!")
}



exports.fnListarCarros = fnListarCarros
exports.fnCadastrarCarro =fnCadastrarCarro



// Este é um modelo

// const carro1={
//     marca: 'Ford',
//     modelo: 'Fiesta'
// }

// const carro2={
//     marca: 'FIAT',
//     modelo: 'Uno'
// }

// // module.exports = {carro1, carro2}
// exports.carro1 = carro1
// exports.carro2 = carro2