// @ importar video 12 Carpeta  3

// ==================================



// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );




const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

// find?, filter
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );

export {
    getHeroeById,
    getHeroesByOwner
}