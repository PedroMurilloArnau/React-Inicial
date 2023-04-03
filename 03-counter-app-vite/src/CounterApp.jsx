import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
    
    // function handleAdd (event) {
        //     console.log(event)
        // }
    const [ counter, setCounter ] = useState( 0 )

    const handleAdd = ( event ) => {
        // console.log(event)
        setCounter( counter + 1);
    }

    const handleLess = () => {
        setCounter( counter - 1);
    }

    const handleReset = () => {
        setCounter( 0 );
    }

    return(
        <>
            <h1>Counter App</h1>
            <h2> { value }</h2>
            <h2>Contador = { counter }</h2>

            <button onClick={ handleAdd }>
                Contador +1
            </button>
            <button onClick={ handleLess }>
                Contador -1
            </button>
            <button onClick={ handleReset }>
                Contador Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}
