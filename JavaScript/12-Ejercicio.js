let minimo = 1;
let maximo = 99;

let numeroRandom = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
document.write(`El numero random es: ${numeroRandom}`);