const numero = parseInt(prompt('Ingrese un Numero que no sea Mayor a 50: '));

for(let i = 1; i <= numero; i++){
    for(let j = 1; j < i; j++){
        document.write(`${j}`);
    }
    document.write(`<br>`);
}