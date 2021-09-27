/* eslint-disable react-hooks/rules-of-hooks */
// @ _ Desestructruación de Arreglos Carpeta 3 Video 10

// Desestructruación 
// Asignacion Desestructurante
// --------------------------------------------------------------------------


//  

// const retornaArreglo = () => {
//     return ['abc', 123];
// }

// const [letras, numeros] = retornaArreglo()  // trae el arreglo independientemente 

// console.log(letras, numeros)

// =============   TAREA =============

//1. EL PROMER VALOR  DE ARR SE LLAMA NOMBRE
// 2. SE LLAMA SETNOMBRE

// const useState = (valor) => {
//     return [valor, () => { console.log('Hola mundo') }]
// }

// const arr = useState('Goku');

// console.log(nombre)
// setnombre()



const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }]
}

const [nombre, setnombre] = useState('Goku');

console.log(nombre)
setnombre()