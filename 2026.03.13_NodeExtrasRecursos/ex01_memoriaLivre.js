// Programa pra ver o total de memória livre

const os = require('os');

const memoriaLivre = os.freemem();

const totalMemoriaLivre = memoriaLivre / (1024*1024*1024);

console.log(`Total de Memória Livre: ${totalMemoriaLivre.toFixed(2)} GB`);
