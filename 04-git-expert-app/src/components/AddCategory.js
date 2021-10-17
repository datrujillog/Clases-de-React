import React, { useState } from "react";
import PropTypes from 'prop-types'


//  Recive como parametro la setCartegories del componente GifExpertApp
const AddCategory = ({  setCategories } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    } 
// Funcion para dar enter en el input
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
       
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




AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}

export { AddCategory };







