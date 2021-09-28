// const activo = true;

// import { getHeroeById } from "./bases/08-imp-exp";

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';  
// const mensaje = ( activo ) ? 'Activo' : null; 
// const mensaje = activo && 'Activo';


// console.log(mensaje);

// ================================  dede aqui ===================


// @ -- Asynnc  Await  


// ------   Async  Await   CARPETA  3 VIDEO 15
//  ---------------------------------------------------------------------

// const getImagenPromesa = () => new Promise(resolve => resolve('https://xfghdfgxdfgxdfsg.com'));
// getImagenPromesa().then(console.log)

const getImagen = async() => {

}

console.log(getImagen())



// const apiKey = 'VS6J8dKQJhwl8oPgNpnosYucs9gKJV3t';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then(resp => resp.json()) 
//     .then( ({ data }) => {
//         const { url } = data.images.original;

//         const img  = document.createElement('img')
//         img.src = url 

//         document.body.append( img )

//     })
//     .catch( console.warn());