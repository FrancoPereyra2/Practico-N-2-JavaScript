let numero = parseInt(prompt('Ingrese un numero menor a 50: '));
for(let i = numero; i >= 1; i--){
    for(let j = 0; j < i; j++){
        document.write(`${i}`);
    }
    document.write(`<br>`);
}
