import React, { useState } from "react";
import PropsTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstrac = () => {
        setCounter(value);
    }

    const handleReset = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h4> { counter } </h4>

            <button onClick = {  handleAdd } > +1 </button>
            <button onClick = {  handleSubstrac } > Reset </button>
            <button onClick = {  handleReset } > -1 </button>
        </>
    )
}

CounterApp.propsTypes = {
    value: PropsTypes.number,
}

export default CounterApp;