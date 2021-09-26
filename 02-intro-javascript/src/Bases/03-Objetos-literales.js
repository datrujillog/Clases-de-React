// console.log('Diego Trujillo');

const persona = {
    nombre: 'Alonso',
    apellido: 'Trujillo',
    edad: 30,
    hija: 'Sara Nicole',
    sara: {
        nombre: 'Sara Nicole',
        apellido: 'Trujillo Orrego',
        edad: '12 Años'

    }

};


// console.table(persona)    // imprimir en una table por consola
console.table(persona)

const persona2 = {...persona }

console.log(persona2)