// Programa pra ver o total de memória total

const os = require('os');

const memoriaTotal = os.totalmem();

const totalMemoriaPC = memoriaTotal / (1024**3);

console.log(`Total de Memória do PC: ${totalMemoriaPC.toFixed(2)} GB`);

// console.log(memoriaTotal)

