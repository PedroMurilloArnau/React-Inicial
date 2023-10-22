import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        expect(testUser).toStrictEqual(user);

    
     });
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = "Pedro"
        const testUserActivo = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo("Pedro");
        console.log(userActivo);

        expect(testUserActivo).toEqual(userActivo);

    })

 });