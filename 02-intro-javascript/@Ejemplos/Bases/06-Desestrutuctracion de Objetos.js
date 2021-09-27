/* eslint-disable react-hooks/rules-of-hooks */
// @ _ Desestructruación de Objetos Carpeta 3 Video 9

// Desestructruación 
// Asignacion Desestructurante
// --------------------------------------------------------------------------

let persona = {
    nombre: 'Diego',
    edad: '30',
    clave: 'yego',
    rango: 'programador'
}

// const { nombre } = persona

// console.log(nombre)

// =============== 

// const retornaPersona = ({ nombre, edad, rango }) => {

//     console.log(nombre, edad, rango)
// }

// retornaPersona(persona)





// =================
// const useContext = ({ clave, nombre, edad, rango }) => {

//     // console.log(nombre, edad, rango)

//     return {
//         nombreClave: clave,
//         años: edad,
//     }
// }

// const { nombreClave, años } = useContext(persona)
// console.table(nombreClave, años)
// ====================================================

const useContext = ({ clave, nombre, edad, }) => {

    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.5536,
            lng: 32166431
        }
    }
}

const { nombreClave, años, latlng: { lat, lng } } = useContext(persona);

// const { lat, lng } = latlng

console.table(nombreClave, años)
console.table(lat, lng)