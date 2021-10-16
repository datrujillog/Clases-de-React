import React, { useState } from "react";
import PropTypes from "prop-types";



const CounterApp = ({ value}) => {



    const [ counter, setCounter ] = useState( value );

   
    const handleAdd = () =>{
        
        setCounter((a) =>  a + 1 )
    }


    const handleAddd = () =>{
        
        setCounter((a) =>  a - 1 )
    }

    var handleAdddd = () =>{
        
        setCounter(value)
    }



  return (
    <>
      <h2>CouterApp</h2>
          <h3> { counter }</h3>
          
          <button onClick={handleAdd} class="btn">+</button>
          <button onClick={ handleAdddd } class="btn">Reset</button>
          <button onClick ={ handleAddd } class="btn">-</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

