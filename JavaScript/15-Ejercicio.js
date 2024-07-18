const frase = String(prompt("Ingrese una frase:"));
let numeroVocales = ``
for (let caracter = 0; caracter < frase.length; caracter++) {
  if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  ) {
    numeroVocales ++
  }
}  document.write(`El numero de vocales es: ${numeroVocales}`);

