
import React, { Fragment } from 'react';
import { PropTypes } from "prop-types"; 


//FC
const PrimeraApp = ({ saludo, titulo }) => {
     
   

    return (
        <Fragment>

            <h2> {saludo} </h2>
            <h2>{titulo}</h2> ,
            <h5>Diego Trujillo</h5>
        </Fragment>
        
    );
}

PrimeraApp.defaultProps = {
    titulo: 'tu primera app',
    saludo: 'Aprendiendo'
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
    
}

// ==========  Tarea ============




// CounterApp.defaultProps = {
//     value: 54411
// }

export {
    PrimeraApp,
    
}

