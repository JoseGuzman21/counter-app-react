import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Prubeas en <PrimeraApp> />', () => {
    test('debe de mostrar un mensaje de Hola soy Jose', () => {
        const saludo = 'Hola soy Jose';

        const { getByText } = render(<PrimeraApp saludo = { saludo }/>)
        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})