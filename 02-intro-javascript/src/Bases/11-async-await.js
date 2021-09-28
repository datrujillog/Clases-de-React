// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error)
    }



}

getImagen();



///////////////////////////////////////  DESDE AQUI YO ///////////////////////////////// 
// @ -- Asynnc  Await  


// ------   Async  Await   CARPETA  3 VIDEO 15
//  ---------------------------------------------------------------------

// const getImagenPromesa = () => new Promise(resolve => resolve('https://xfghdfgxdfgxdfsg.com'));
// getImagenPromesa().then(console.log)

// const getImagen = async() => {
//     const apiKey = 'VS6J8dKQJhwl8oPgNpnosYucs9gKJV3t';

//     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//     const data = await resp.json().then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img)


//         // console.log(data)
//     });

// }

// getImagen()
// .catch( console.warn());


try {
    const getImagen = async() => {
            const apiKey = 'VS6J8dKQJhwl8oPgNpnosYucs9gKJV3t';

            const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const { data } = await resp.json()

            const { url } = data.images.original;

            const img = document.createElement('img');
            img.src = url;

            document.body.append(img)
        }
        // console.log(data)
    getImagen()

    .catch(console.warn());

} catch (error) {
    console.log('Esto es un  BoBo', error)

}