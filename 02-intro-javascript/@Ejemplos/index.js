// @ _ Promesas   video #12 Carpeta  #3


//Promesas
// --------------------------------------------------------------------------

import { getHeroById } from './Bases/08-import-exp';


// const promesas = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve()

//     }, 2000);
// })

// promesas.then(() => {

//     console.log('la promesa')
// })


const promesas = new Promise((resolve, reject) => {

    setTimeout(() => {
        // tarea
        // importar el 
        const heroe = getHeroById(1);
        console.log(heroe);
        // resolve()

    }, 2000);
});

promesas.then(() => {
    console.log('la promesa')
})