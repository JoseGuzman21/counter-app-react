import { retornaArreglo } from '../../base/07-deses-arr.js'

describe('Debe de retornar un string y un numero', () => {
    test('Debe de retornar un string y un numero', () => {
        const [ letras, numeros ] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(numeros).toEqual(123);
    })
})