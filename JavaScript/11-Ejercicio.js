const edadNombre1 = prompt('Ingrese su edad y nombre: ');
const edadNombre2 = prompt('Ingrese su edad y nombre: ');
const edadNombre3 = prompt('Ingrese su edad y nombre: ');

const [edad1, nombre1] = edadNombre1.split(' ');
const [edad2, nombre2] = edadNombre2.split(' ');
const [edad3, nombre3] = edadNombre3.split(' ');

const numEdad1 = parseInt(edad1);
const numEdad2 = parseInt(edad2);
const numEdad3 = parseInt(edad3);

let Edadnombres = Math.max(edadNombre1, edadNombre2, edadNombre3);

if(Edadnombres == numEdad1){
    document.write(`El mayor de todos los nombres es: ${nombre1}`);
}else if(Edadnombres == numEdad2){
    document.write(`El mayor de todos los nombres es: ${nombre2}`);
}else{
    document.write(`El mayor de todos los nombres es: ${nombre3}`);
}