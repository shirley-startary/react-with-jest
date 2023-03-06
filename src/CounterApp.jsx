import React, {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)
    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>Counter App</h1>
            <div>{counter}</div>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}