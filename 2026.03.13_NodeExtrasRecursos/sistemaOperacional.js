const os=require("os")


console.log("Retorna um string que identifica a arquitetura, como arm. x64, arm64.")
console.log(os.arch())

console.log("Retorna informações sobre as CPUs disponíveis no seu sistema.")
console.log(os.cpus())

console.log("Retorna o número de bytes que representam a memória  livre no seu sistema")
console.log(os.freemem())

console.log("Retorna a plataforma em que o Node.js foi compilado")
console.log(os.platform())

console.log("Retorna a número de bytes que representam o total de memória disponível no sistema")
console.log(os.totalmem())

console.log("Identifica o sistema operacional")
console.log(os.type())

console.log("versão do sistema operacional")
console.log(os.version())

console.log("Retorna um objeto contendo o username corrente, uid, gid, shell, e homedir")
console.log(os.userInfo())

console.log("Retorna host name.")
console.log(os.hostname())

console.log("Retorna o número de segundos em que o computador está rodando desde o útlimo reinício")
console.log(os.uptime())

