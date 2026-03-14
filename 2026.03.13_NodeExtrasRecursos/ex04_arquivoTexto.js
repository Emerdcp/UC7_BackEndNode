// Programa para um programa, gerar um text com as informações

const os = require('os');
const fs = require('fs');

const hostname=os.hostname();

//Total memória em GB
const memoriaTotal=(os.totalmem()/(1024**3)).toFixed(2);

//Sistema operacional
const sistema=os.type();

//Usuário ativo
const usuario=os.userInfo().username;

//CPUs
const cpus=os.cpus();
const quantidadeCPU=cpus.length;
const modeloCPU=cpus[0].model;

//Nome do arquivo
const nomeArquivo=`registro_${hostname}.txt`;

//Conteúdo do arquivo
const conteudo=`
    Nome do Host: ${hostname}
    Memória Total: ${memoriaTotal} GB
    Sistema Operacional: ${sistema}
    Usuário Ativo: ${usuario}
    Quantidade de PCUs: ${quantidadeCPU}
    Modelo da CPU: ${modeloCPU}
`;

// console.log(conteudo)

// Cria o arquivo
fs.writeFile(nomeArquivo, conteudo, (erro)=>{
    if(erro){
        console.log("Erro ao criar arquivo:", erro)
    }else{
        console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
    }
});