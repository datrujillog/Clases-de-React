// @ Funciones  Carpeta 3 Video 8

// --------------------------------------------------------------------------

// function saludar(nombre) {
//     return `Hola, ${nombre}`
// }
// console.log(saludar('Diego'))




// const saludardos = function(nombre) {
//     return `Hola, ${nombre}`
// }
// console.log(saludardos('Diego'))





// const saludartres = (nombre) => {
//     return `Hola, ${nombre}`
// }
// console.log(saludartres('Diego'))




// const saludarcuatro = (nombre) => `Hola, ${ nombre }`;

// console.log(saludarcuatro('Vegueta'))


// const saludarcinco = (nombre) => `Hola, mundo`;

// console.log(saludarcinco('Vegueta'))


// const getUser = () => {
//     return {
//         id: '1020428',
//         usuario: 'yego0210'
//     }
// }

// console.log(getUser())



// const getUser = () => ({
//     id: '1020428',
//     usuario: 'yego0210'
// });


// console.log(getUser())
// -----------------------------------------


// ================ Tarea   ==================



//1. Tranformar una funcion a flecha
// 2. tiene que retornar un objeto inplicito
//3. pruebas

// function getUsuarioAtivo(nombre) {
//     return {
//         id: '1020428',
//         username: nombre

//     }
// };

// const usuarioAtivo = getUsuarioAtivo('Diego')

// console.log(usuarioAtivo)


// Sosuccion

//1. Tranformar una funcion a flecha


// const getUsuarioAtivo = (nombre) => {
//     return {
//         id: '1020428',
//         username: nombre

//     }

// }

// const usuario = getUsuarioAtivo('pedro')

// console.log(usuario)



// 2. tiene que retornar un objeto implicito

const getUsuarioAtivo = (nombre) => ({
    id: '1020428',
    username: nombre
})

const usuario = getUsuarioAtivo('Sara')


console.log(usuario)