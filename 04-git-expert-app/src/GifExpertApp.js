import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
// import { AddCategory } from "../public/components/AddCategory";



const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai x', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch', 'Samurai x', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories(['Diego',...categories, ])       
    // }


  return (
    <>
          <h2>GifExpertApp </h2>
          <AddCategory />
          <hr />

          
          
          <ol>
              {
                  categories.map((category) => {
                      return <li key={ category} > { category }</li>
                  })
              }
         </ol>
          
    </>
  );
};

export {
    GifExpertApp
}
    

