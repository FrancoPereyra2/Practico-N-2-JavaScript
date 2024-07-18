const frase = String(prompt('Ingrese una frase:'))
for(let caracter = 0; caracter < frase.length; caracter++){
    document.write(`${frase.charAt(caracter)}`)
    if(caracter < frase.length - 1){
        document.write(`-`)
    }

}