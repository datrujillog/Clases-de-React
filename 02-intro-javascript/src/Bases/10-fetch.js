
const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );


    // --------------------------------  Yo ---------------------------------

    
// @--fetch API carpeta  3 video 14 

// -----------------------------------------------
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

