let contador = 0
function mensagem(){
    contador++
    console.log(contador)
    console.log("agendado")
    if(contador == 5){
        clearInterval(intervalo)
    }
}

const intervalo = setInterval(function(){
    mensagem()
}, 1000)



// ################## vai ficar aparecendo sempre em determinado tempo
// function mensagem(){
//     console.log("agendado")
// }

// setInterval(function(){
//     mensagem()
// }, 1000)






// #######################
// setTimeout(function(){
//     console.log("agendamento")
// }, 100)

//espera e executa uma vez
//vai agendar a execução no programa, exemplo depois de segundo vai mostrar


// #########################
// setInterval(function(){
//     console.log("agendamento")
// }, 100)

//esperar e executa, sempre
//vai agendar a X tempo a propaganda.




// Rodar no terminal
// node agendamento