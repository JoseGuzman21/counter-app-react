import { getImagen } from "../../base/11-async-await";


describe('Pruebas async - await & fetch', () => {
    test('Debe de retornar la url de la imagen', async () => {
        const url = await getImagen()

        expect(url.includes('https://')).toBe(true);
    })

    test('Debe de retornar un error', () => {
        
    })
    
});