for(let numeros = 1; numeros <= 500; numeros++){
    if(numeros % 4 == 0 && numeros % 9 == 0){
        document.write(`${numeros} Es multiplo de 4 y 9<br>`);
    }else if(numeros % 4 == 0){
        document.write(`${numeros} Es multiplo de 4<br>`);
    }else if(numeros % 9 == 0){
        document.write(`${numeros} Es multiplo de 9<br>`);
    }else{
        document.write(`${numeros} <br>`);
    }
    if(numeros % 5 == 0){
        document.write(`--------------------<br>`);
    }
}
