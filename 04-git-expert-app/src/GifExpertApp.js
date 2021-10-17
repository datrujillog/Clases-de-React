import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
// import GifGrid from "./components/GifGrid";
// import { AddCategory } from "../public/components/AddCategory";




const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai x', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories(['Diego',...categories, ])       
    // }


  return (
    <>
          <h2>GifExpertApp </h2>
      <AddCategory setCategories={ setCategories } />
          <hr />

          
          
          <ol>
              {
                  categories.map(category => 
                      // return <li key={ category} > { category }</li>
                    <GifGrid
                    key={ category }
                      category={category}
                    />
                  )
              }
         </ol>
          
    </>
  );
};

export {
  GifExpertApp
  
}
    

