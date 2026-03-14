/* Leitura síncrona
const fs = require("fs");
const dados = fs.readFileSync("clientes.txt", "utf8");
console.log(dados);
console.log("Bem Vindo");*/

const fs = require("fs");

let novoCliente = "Juca Bala \n";
try {
  const dados = fs.writeFileSync("clientes.txt", novoCliente);
  console.log(":::Novo cliente cadastrado com sucesso:::");
} catch (erro) {
  console.error("Erro Aqui::::::" + erro);
}

novoCliente = "Zé Rico \n";
try {
  const dados = fs.appendFileSync("clientes.txt", novoCliente);
  console.log("+1 cliente cadastrado!");
} catch (erro) {
  console.error("erro:::: " + erro);
}

const dados = fs.readFileSync("clientes.txt", "utf8");
console.log(dados);
console.log("Bem Vindo");
