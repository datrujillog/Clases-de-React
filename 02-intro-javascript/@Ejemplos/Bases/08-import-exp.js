// @ _ importacion, export y funciones comunes de arreglos   video #10 Carpeta  #3


// importacion, export y funciones comunes de arreglos
// --------------------------------------------------------------------------

// import { heroes } from "./data/heroes";
// import { heroes, owner } from "./data/heroes"





// const getHeroById = (id) => {

//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true
//         } else {
//             return false
//         }


//     });
// }
// console.table(getHeroById(6))

// ==== Simplificado =======

// const getHeroById = (id) => {
//     return heroes.find((heroe) => heroe.id === id)
// }
// console.table(getHeroById(2))


// export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id)


// console.table(getHeroById(2))

// =========================  filtre =================================================

// export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.table(getHeroesByOwner('DC'))

// export {
//     getHeroById,
//     getHeroesByOwner,
// }




// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );




export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );