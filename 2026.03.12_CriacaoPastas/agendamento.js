//setTimeout e setInterval são funções de agendamento em JavaScript. O setTimeout executa uma função após um determinado tempo, enquanto o setInterval executa uma função repetidamente em intervalos de tempo especificados.

// setTimeout(function () {
//   console.log("Agendamento");
// }, 3000);

// setInterval(function () {
//   console.log("Agendamento");
// }, 100);

// O código acima irá imprimir "Agendamento" a cada 100 milissegundos, ou seja, 10 vezes por segundo. Para parar o setInterval, você pode usar clearInterval passando o identificador retornado por setInterval:
// function mensagem() {
//   console.log("Agendamento");
// }
// setInterval(function () {
//   mensagem();
// }, 1000);

let contador = 0;
function mensagem() {
  contador++;
  console.log(contador);
  console.log("Agendamento");
  if (contador == 5) {
    clearInterval(intervalo);
  }
}
const intervalo = setInterval(function () {
  mensagem();
}, 1000);
