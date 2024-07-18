const filas = parseInt(prompt('Ingrese el numero de filas: '));
const columnas = parseInt(prompt('Ingrese el numero de columnas: '));
let tabla = filas * columnas

document.write(`<table><tbody>`)
for(let indicefilas = 1; indicefilas <= filas; indicefilas++){
    document.write(`<tr>`)
    for(let indicecolumnas = 1; indicecolumnas <= columnas; indicecolumnas++){
        document.write(`<td>${tabla}</td>`);
        tabla--
    }
    document.write(`</tr>`);
}

document.write(`</tbody></table>`)
