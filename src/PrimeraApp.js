import React, { Fragment } from 'react';
import PropsTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
        </>)
}

PrimeraApp.propsTypes = {
    saludo: PropsTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
