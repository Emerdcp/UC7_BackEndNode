// Programa pra ver o total de horas ligado

const os = require('os');

const horasLigada = os.uptime();

const totalHoras = horasLigada / 3600;

console.log(`Total Horas do Peça Lidago: ${totalHoras.toFixed(2)} hs`);

