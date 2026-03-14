/*leitura de arquivos de forma assíncrona
const fs = require("fs");
fs.readFile("clientes.txt", "utf-8", (erro, dados) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(dados);
});
console.log("Bem vindo");*/
const fs = require("fs");

let novoCliente = "João da Silva \n";

fs.writeFile("clientes.txt", novoCliente, (erro) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log("Novo Cliente Cadastrado!");
});

fs.readFile("clientes.txt", "utf-8", (erro, dados) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(dados);
});

novoCliente = "Regina George \n";

fs.appendFile("clientes.txt", novoCliente, (erro) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log("+1 cliente cadastrado");
});
console.log("Bem vindo");
