const fs = require("fs");

let pasta = "fotos";

console.log("\n\n=== verificando pasta ===");
if (fs.existsSync(pasta)) {
  console.log("Tudo certo, a pasta já existe!");
} else {
  console.log("A pasta não existe");
}

// console.log("\n\n=== Criando pasta ===");
// pasta = "icones/redes-sociais";
// if (!fs.existsSync(pasta)) {
//   fs.mkdirSync(pasta);
//   console.log("pasta criada com sucesso!");
// } else {
//   console.log("A pasta já existe");
// }

// console.log("\n\n===== listando conteúdo da pasta =====\n\n");

// pasta = "icones";
// console.log(fs.readdirSync(pasta));

//===renomear===//

// console.log("\n\n ===== renomeando pasta =====");
// try {
//   fs.renameSync("icones", "icons");
//   console.log("Pasta renomeada com sucesso!");
// } catch (erro) {
//   console.log("não foi possível renomear");
// }

//===delete===//

console.log("\n\n=== excluindo pasta ===\n\n");
const fsExtra = require("fs-extra");

const folder = "icons";
fsExtra.remove(folder, (erro) => {
  console.log(erro);
});
