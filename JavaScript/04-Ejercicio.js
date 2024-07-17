let suma = 0;
do {
  let num1 = parseInt(prompt("Ingrese un numero: "));
  if(!isNaN(num1)){
    suma += num1;
  }else{
    alert("No es un numero");
  }
  console.log(num1);
} while(confirm("¿Desea continuar?"));

document.write(`La suma total es: ${suma}`)