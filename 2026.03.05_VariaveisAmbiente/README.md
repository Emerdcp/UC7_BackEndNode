# Para Iniciar

## Para iniciar e instalar o NPM

- npm init -y
- npm config set strict-ssl false
- npm i express
- npm i nodemon
- npm install bright

## Alterar o arquivo package.json

"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node index",
   "dev": "nodemon index"
},


## depois criar uma página index.js
- colocar a descrição a baixo

```
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Oi')
})

app.listen(3000)
```

## Depois testar para ver se deu certo

Digita no navegador

http://localhost:3000/

Vai retornar um oi.

## Para criar arquvivos oculto

.ENV

Ele cria o arquvivo para manter oculto as informações

SERVIDOR_BD=localhost

PORTA=3000

## Para o Node reconhecer o PORTA da variável de ambiente precisa digitar o comando a baixo.

node --env-file=.env index

## Como utilizar

Depois de instalar o comando, vai na index e realiza a trocar.

app.listen(3000)

- Altear para:

app.listen(PORTA)

# Para conseguir rodar e mostrar o que está aparecendo, colocar no package-json

"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node --env-file=.env index",
   "dev": "nodemon --env-file=.env index"
},

# Mas para rodar e mostrar, ao invés de alterar o package-json, pode fazer assim

Rodar o comando 

- npm i dotenv

Mantendo assim 

"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node index",
   "dev": "nodemon index"
},

e no Arquivo index.js, dolocar

- require('dotenv').config()

Assim vai todar tudo automáticamente.

# Para instalar e apresentar animal.

npm i cowsay

const cowsay = require("cowsay")
console.log(cowsay.say({text: 'Hello word!'}))

No terminal digita, 

node vaca

# Para Saber de todos os projetos que estã osendo usandos.

npm list

# Para instalar Barra de progresso

npm i progress

- criar um arquivo barra.ja

const ProgressBar = require('progress')
const bar  = new ProgressBar(':bar', { total: 50 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete){
        clearInterval(timer)
    }
}, 100)

- Rodar o arquivo 

node barra