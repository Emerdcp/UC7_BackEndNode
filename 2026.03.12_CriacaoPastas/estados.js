const fs = require("fs");

const estados = [
  "11-Rondônia-RO",
  "12-Acre-AC",
  "13-Amazonas-AM",
  "14-Roraima-RR",
  "15-Pará-PA",
  "16-Amapá-AP",
  "17-Tocantins-TO",
  "21-Maranhão-MA",
  "22-Piauí-PI",
  "23-Ceará-CE",
  "24-Rio Grande do Norte-RN",
  "25-Paraíba-PB",
  "26-Pernambuco-PE",
  "27-Alagoas-AL",
  "28-Sergipe-SE",
  "29-Bahia-BA",
  "31-Minas Gerais-MG",
  "32-Espírito Santo-ES",
  "33-Rio de Janeiro-RJ",
  "35-São Paulo-SP",
  "41-Paraná-PR",
  "42-Santa Catarina-SC",
  "43-Rio Grande do Sul-RS",
  "50-Mato Grosso do Sul-MS",
  "51-Mato Grosso-MT",
  "52-Goiás-GO",
  "53-Distrito Federal-DF",
];

/*assíncrono
estados.forEach((estado) => {
  fs.appendFile("estados.txt", estado + "\n", (erro) => {
    if (erro) {
      console.error(erro);
      return;
    }
    console.log("Estado salvo:", estado);
  });
});

console.log("Processo iniciado...");*/

/*sincrono
estados.forEach((estado) => {
  fs.appendFileSync("estados.txt", estado + "\n");
});

console.log("Estados gravados!");*/

//Modelo Guto:

let estadosFormatados = "";
estados.forEach((estado) => {
  estadosFormatados += estado + "\n";
});

/*const estadosFormatados = estadosBrasileiros.join(' \n')*/

fs.writeFile("estados.txt", estadosFormatados, (erro) => {
  if (erro) {
    console.log("algo deu errado");
    return;
  }
  console.log("Estados adicionado com sucesso!");
});
