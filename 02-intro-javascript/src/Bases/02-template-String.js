// console.log('Diego Trujillo');

const nombre = 'Diego';
const apellido = 'Trujillo'

let nombrecompleto = `${ nombre }  ${ apellido } `

console.log(nombrecompleto)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es mi textto: ${ getSaludo(nombre) }`)