do{
    const Dni = parseInt(prompt('Ingrese su DNI: '));
    const division = Dni % 23;
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if(Dni > 0 && Dni < 99999999){
        document.write(`La letra correspondiente es: ${letras[division]}<br>`);
        console.log(`La letra correspondiente es: ${letras[division]}`);
    }else if(isNaN(Dni)){
        alert('No es un numero');
    }else{
        alert(`Debe ingresar un valor entre 0 y 99999999`);
    }
}while(confirm('¿Desea continuar?'))