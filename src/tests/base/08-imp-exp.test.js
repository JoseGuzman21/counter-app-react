import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones Heroes', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });


    test('debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un heroe DC', () => {
        const name = 'DC';
        const heroes = getHeroesByOwner(name);
        
        const heroeData = heroes.filter(h => h.owner === name);

        expect(heroes).toEqual(heroeData);
    });

    test('debe de retornar un heroe marvel', () => {
        const name = 'Marvel';
        const heroes = getHeroesByOwner(name);
        
        const heroeData = heroes.filter(h => h.owner === name);

        expect(heroes).toEqual(heroeData);
    });


})