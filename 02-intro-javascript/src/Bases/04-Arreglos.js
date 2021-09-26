// video 7 de la carpeta 3

// ----------------------------------------------------------------------------------------------------------------------7
// const arreglo = new Array(100);

const arreglo = []
arreglo.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

let arreglo2 = [...arreglo, 10] // los tres puntos sirve para extraer la informacion de otro arreglo   video 7 de la carpeta 3

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2
})


console.log(arreglo)
console.log(arreglo2)
console.groupCollapsed(arreglo3)