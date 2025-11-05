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