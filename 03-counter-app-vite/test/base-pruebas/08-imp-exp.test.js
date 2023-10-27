import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
     });
     test('getHeroeById debe retornar undefined si no existe el ID', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );

        console.log( hero );
        
        expect( hero ).toBeFalsy();
        
        //Tambien podriamos utilizar el metodo toBe( undefined )
        //ToBeFalsy metodo que iguala a un valor negarivo, nulo o undefined
        
     });
     test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        heroes = 
        
        console.log( heroes.length );

        expect( heroes.length ).toEqual( 3 );

      });
     test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        
        console.log( heroes.length );

        expect( heroes.length ).toEqual( 2 );

      });
});