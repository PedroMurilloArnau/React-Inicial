const newMessage = 123;
const newCadena = [1,2,3,4,5,6];
const newObject  = {
    message: 'Hola Mundo',
    title: 'Pedro'
}
const funcionResultado = () => {
    return 'Resultado de funcion';
}

export const Variables = () => {


    return (
        <>
            <h1>Asi trabajamos con Variables</h1>
            <p>Un String o numero { newMessage } </p>
            <p>Operacion directamente { 1 + 1 } </p>
            <p>La cadena es { newCadena }</p>
            <p>Este sera el objeto { newObject.title}</p>
            <p>Para mandar el objeto completo mediante
              <code>  { JSON.stringify(newObject) } </code>
            </p>
            <p>Retorno de una funcion:  { funcionResultado() }</p>
        </>
    );

}