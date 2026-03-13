const fs = require("fs");
fs.readFile("brasileirao_2026_times.csv", "utf-8", (erro, dados) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(dados);
});
console.log("Times do Campeonato Brasileiro de 2026: ");
