const edad = parseInt(prompt(`Ingrese su edad:`));
let edadApta = `${edad} Es apto/a para conducir`;

if (edad >= 18) {
  document.write(edadApta);
} else {
  document.write(`${edad} No es apto/a para conducir`);
}