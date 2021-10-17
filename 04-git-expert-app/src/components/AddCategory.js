import React, { useState } from "react";

const AddCategory = () => {

    const [inputValue, setInputValue] = useState("Hola mundo");
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    } 
// Funcion para dar enter en el input
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        
    }

  return (
     
      <form onSubmit={ handleSubmit }>
              <input
              value={inputValue}
              type="text"
              onChange={ handleInputChange }
          />
          </form>
          
          
    
  );
};

export { AddCategory };
