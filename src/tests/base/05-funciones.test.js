
import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUserActive debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Jose'
        }

        const user = getUsuarioActivo('Jose');

        expect(user).toEqual(userTest);
    })


})