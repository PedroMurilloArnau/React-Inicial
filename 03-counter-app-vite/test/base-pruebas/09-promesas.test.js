import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
                //Para tareas asincronas debemos de mandar un metodo para
                //decirle a Jest que ya hemos terminado de hacer las pruebas
                //de forma asincronas.
            });
     });
    test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => { 

        const id = 100;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el héroe 100' );
                
                done();
            });
     });
 });