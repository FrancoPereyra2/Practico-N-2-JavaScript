const guion = '-'
do{
    let cadenas = String(prompt('Ingrese un texto: '));
    document.write(`${cadenas}${guion}`);
}while(confirm('¿Desea continuar?'))