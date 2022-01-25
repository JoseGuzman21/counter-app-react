import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('prueba en el metodo getSaludo', () => {

        //1. Inicializacion
        const nombre = 'Jose';

        //2. Estimulo
        const saludo = getSaludo(nombre);

        //3. Observar el comportamiento
        expect(saludo).toBe(`Hola ${nombre}`);
    })
})
