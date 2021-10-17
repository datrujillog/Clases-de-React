import React, { useEffect, useState } from 'react'
import GifGridltem from './GifGridltem';


const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    

    useEffect(() => {
        getGifs();
     }, [])

 
    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+an+Morty&limit=10&api_key=VS6J8dKQJhwl8oPgNpnosYucs9gKJV3t';
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages( gifs)
    }
// getGifs()



    return (
        <div> 
            <h3> {category}</h3>
            
            
                {
                    images.map( img =>(
                        
                        // <li key={id}>{ title }</li>
                        <GifGridltem
                            key={ img.id }
                            img={img} 
                            {...img}
                            />
                    ))
                }
        
            
            
        </div>
    )
}

export {
   GifGrid 
} 
