import React from 'react'
//import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = () => {
    const [ contador, setContador] = useState( 0 );
    const cambioBot = () =>{
        setContador( contador + 1)
    };
  
    return (
    <div>
        <h1>CounterApp</h1>
        <h1>{ contador }</h1>
        <button onClick={ cambioBot } > +1 </button>
    </div>    

  )
}

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired  
// }