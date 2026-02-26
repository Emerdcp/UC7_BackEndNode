2026.02.26_ExerciciosLojaAluguelCarro
│
├── server.js
├── package.json
│
├── config/
│   └── db.js
│
├── routes/
│   ├── veiculos.js
│   └── agendamentos.js
│
├── controllers/
│   ├── veiculosController.js
│   └── agendamentosController.js
│
└── public/
    ├── index.html
    ├── veiculos.html
    └── script.js




















# UC7_BackEndNode

# Iniciando o projeto

```bash
npm init
```

- package name: `nome padrão da pasta`
- version: `padrão 1.0.0`
- description: `Primeiro projeto em Node.JS`
- entry point: `padrão index.js`
- test command: `vazio por padrão`
- git repository: `deixar caminho padrão`
- keywords: `vazio por padrão`
- author: `Henrique Marques`
- license: `MIT`

# Testar se esta rodando o código no node

```bash
node index.js
```

# Criar atalho para scripts

 - No arquivo package.json logo depois de:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    }
```
- Coloque virgula depois de " insira virgula e na linha de baixo insira `"comando personalizado": "comando" ficando assim:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
},
```


## Link criado no mira.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVJvvhgNk=/?embedMode=view_only_without_ui&moveToViewport=-2008,-553,4789,2188&embedId=673879182792" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

https://miro.com/app/live-embed/uXjVJvvhgNk=/?embedMode=view_only_without_ui&moveToViewport=-2008%2C-553%2C4789%2C2188&embedId=673879182792


https://miro.com/app/board/uXjVJvvhgNk=/

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVJvvhgNk=/?embedMode=view_only_without_ui&moveToViewport=-4350,8695,14148,6464&embedId=559883813120" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>


Claro! 👇
O comando **`npm install express`** é usado para **instalar o framework Express** no seu projeto Node.js.

---

### 🧠 O que é o Express?

O **Express.js** é um **framework minimalista para Node.js**, usado para criar **servidores e APIs** de forma simples e rápida.
Ele facilita o gerenciamento de **rotas (URLs)**, **requisições HTTP**, **middlewares**, e **respostas do servidor**.

---

### 💻 Como usar na prática

1. **Crie uma pasta para o projeto**

   ```bash
   mkdir meu-projeto
   cd meu-projeto
   ```

2. **Inicie um projeto Node.js**

   ```bash
   npm init -y
   ```

   Isso cria um arquivo `package.json` com as configurações básicas.

3. **Instale o Express**

   ```bash
   npm install express


   npm install --save-dev nodemon
   ```

   ✅ Isso faz o seguinte:

   * Baixa o pacote `express` do **npm registry** (repositório de pacotes Node);
   * Adiciona o Express à pasta `node_modules/`;
   * Registra a dependência no seu `package.json`.

---

### 📁 Após instalar

Você terá algo assim no seu projeto:

```
meu-projeto/
│
├─ node_modules/
│
├─ package.json
│
└─ index.js   ← (arquivo principal do servidor)
```

---

### 🚀 Exemplo de uso

Crie um arquivo chamado `index.js` e adicione:

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor Express rodando! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Execute com:

```bash
node index.js
```

E acesse no navegador:
👉 [http://localhost:3000](http://localhost:3000)

---

### 📦 Dica extra — instalação como dependência de desenvolvimento

Se quiser instalar o Express **apenas para desenvolvimento** (por exemplo, para testes locais):

```bash
npm install express --save-dev
```

Mas normalmente usamos **sem o `--save-dev`**, já que o Express é necessário em produção também.

---

Quer que eu te mostre também como criar rotas, middlewares ou uma API completa com Express?





###########################################################################

# Conexão com Banco de dados.

01. Depois de criar as pasta e iniciar, lembrando de fazer instalação.

```js
npm i
```

para poder instalar.

02. Rosar um Run dev para poder iniciar o projeto.

````js
npm run dev
```

03. Configuar o banco de dados.

Ir na página index.js e colocar

```js
const mysql = require('mysql')
```

04. Criar um arquivo de configuração.

```js
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_loja'
})
```

05. Para acessar o banco de dados pelo Xamp.

exemplo: http://localhost:8080/dashboard/

