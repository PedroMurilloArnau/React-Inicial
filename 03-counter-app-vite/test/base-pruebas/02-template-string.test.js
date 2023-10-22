import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";


describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe retornar "Hola Mundo"', () => {
      
        const name = "Fernando";
        const msg = getSaludo( name );

        expect( msg ).toBe(`Hola ${ name }`)

    });
});