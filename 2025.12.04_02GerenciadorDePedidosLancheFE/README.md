# Para Iniciar o Node.

Para desanha caso de Uso.

01. Criar um documento em branco.

![alt text](image.png)

02. Clique e mais formas, e selecion UML

![alt text](image-1.png)

03. Selcione o Quadrado e coloca nome "Lanchonete", precisa pegar o caso de USO.

![alt text](image-2.png)

04. Foi definio o Usuário que seleciona e conversar com a classe, para fazer um pedido

![alt text](image-3.png)



# Para configurar.

Rodar os comandos para poder iniciar um projeto, rodar os camando a baixo.

01. Abrir o VsCode

02. Control + ' = para poder mudar para CMD ou mudar para CMD

03. **npm init -y**

04. npm **npm install express**

05. Criar o arquivo **index.js**

Criar um comando mínimo para iniciar

const express = require("express")
const app = express()

app.length("/", function(req, res){
    res.send("funciona")
})

app.listem(3000)

06. Para iniciar o projeto, é **node index.js**

07. Abrir no navegador o site.

**http://localhost:3000/**

08. Instalar o nodemon **npm install --save-dev nodemon**

09. depois ir no arquivo package.json e acrescentar

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index"
  },

  10. Depois para poderar colocar **npm run dev** para iniciar o projeto


  