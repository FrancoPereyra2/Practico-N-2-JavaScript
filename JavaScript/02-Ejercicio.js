const nota = parseInt(prompt('Ingrese su nota: '));
if(nota <= 2){
    document.write(`${nota} Muy Deficiente`);
}else if(nota <= 4){
    document.write(`${nota} Insuficiente`);
}else if(nota <= 6){
    document.write(`${nota} Suficiente`);
}else if(nota == 7){
    document.write(`${nota} Bien`);
}else if(nota <= 9){
    document.write(`${nota} Notable`);
}else if(nota <= 10){
    document.write(`${nota} Sobresaliente`);
}