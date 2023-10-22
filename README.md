# CURSO INICIAL DE REACT PASO A PASO

## 1. COMPONENTES REACT

- Pequeña pieza de código encapsulada re-utilizable que puede tener estado o no.

En una página, toda la página se podría englobar en un componente.

- Que se podría a su vez subdividir en componentes hijos, por ejemplo:

    - Componente menú, reutilizable.
    - Dentro de el podríamos tener subcompoentes como por ejemplo menuItem.

Creamos a la vez un **árbol de componentes** para poder crear nuestra aplicación.Ejemplo:

> CervezasAPP > Router > Screen/Pag > Menú > MenuItem

Al ser renderizado el componente tiene un estado. Pudiendo cambiar este en un punto determinado del tiempo.

### 1.1 ELEMENTO FRAGMENT

- Debemos importar en nuestro componente un **Fragment**.

> import { Fragment } from 'React'

Y posteriormente:

```
 <Fragment>
    <h1>Hola Mundo</h1>
    <p>Este es un texto hijo</p>
 </Fragment>
 ```


- O directamente, a la hora de retornar el codigo lo haremos mediente **<> </>**, sin necesidad de importar el componente fragment

```
 <>
    <h1>Hola Mundo</h1>
    <p>Este es un texto hijo</p>
 </>
 ```

### 1.2 VARIABLES EN JSX

- Para ingresar una variable lo realizamos mediante **{}**, de la siguiente manera:

``` 
...
<h1> { } </h1>
...
```

- Ojo solo debemos de utilizar para representar funciones de tipo no asíncrona 

### 1.3 Crear estilos

- Para crear estilos, primero creamos un nuevo archivo de **styles.css**.

- Para poder utilizar nuestros estilos los invocamos a traves de nuestro archivo raiz **main.jsx** de la siguiente manera:

> import './styles.css'

### 1.3 COMUNICACION ENTRE COMPONENTES O PROPS

- Para mandar información del padre a los componentes hijos. debemos asignar las props requeridas a la hora de crear el metodo deltro del metodo hijo.

```
   // Dentro del metodo hijo
   export const metodo1 = ( {title} ) {
      return (
         <h1>{title}</h1>
      )
      ...
   }
```

- Y dentro del componente padre lo lanzaremos a la hora de llamar al componente. 

```
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld title='Pericosa' />
   ...
)
```

### 1.4 UTILIZACIÓN DE LAS PROPTYPES

- El uso de los Prop Types se utilizan para el control de la información entre los distintos componentes.

- Dado que de un componente a otro podremos mandar información de todo tipo, en determinado momento podremos requerir que esta información sea de un tipo determinado, string, number ... o directamente hacer necesario que llegue la información para poder cargar la propia página controlando así el envio de errores.

- Esto se maneja dentro de React de una manera muy sencilla medinate el uso de la librerí **prop-types**. Esta librería en Vite no esta incluida y la deberás instalar de la siguiente manera:

```
   npm install prop-types
   
```

- Posteriormente en el componente hijo deberas de invocar a la librería.

```

   import PropTypes from 'prop-types';

```

- Finalmente definimos las propiedades de las variables que enviamos de la siguiente manera, dentro del componente hijo:

```
   HelloWorld.propTypes = {
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.number.isRequired
   }
```


## 2 EVENTOS

### 2.1 EVENTOS CLICk

- La documentación la podemos encontrar en el siguiente enlace:

[Eventos React](https://es.reactjs.org/docs/events.html)

- El cambio del estado de la página la podemos utilzar mediante **Hooks**

[Más info de los Hooks](https://es.reactjs.org/docs/hooks-intro.html)

- Los Hooks en React se denominan como **use**

Para importar de React uno de los Hooks lo hacemos de la siguiente manera:

```
   import { useState } from 'react';
```
Posteriormente creamos una constante en la cual creamos una nueva constante para asignar el valor de nuetro Hook:

```
    const [ counter, setCounter ] = useState( 0 )
```

En este caso seteamos el valor incial de nuestra Hook a ***0*** y el metodo del cambio se realizara a través del metodo ***setCounter***. Notese que los métodos de modificación de nuestros Hooks se notaran de la sigueinte forma "***set*** + Nombre de la variable".

En nuestro caso la modificación se realiza a través del método onClick, en nuestro caso **handleAdd**:

```
    const handleAdd = () => {
        setCounter( counter + 1);
    }
```

## 3 PRUEBAS CON JEST

### 3.1 INSTALACION Y PREPARACION DE JEST
Lo primero de todo tendremos que entrar en la pagina de Jest.

[Jest](https://jestjs.io/docs/getting-started)

Debemos instalar Jest.

Si tenemos ***npm*** mediante el siguiente codigo, dentro de nuestro ejercicio.

```
   npm install --save-dev jest

```

Ademas debemos configurar nuestro packege.json y en el apartado de ***scripts*** debemos de incluir el siguiente script:

```
     "test": "jest"
```
Pero para que las pruebas se actualicen cada vez que modifiquemos nuestras pruebas debemos modificarlo de la siguiente manera:

```
 npm install --save-dev jest

```

- Debemos de configurar Babel para poder exportar nuestros metodos hacia los teste para ello deberemos crear un archivo en nuestra raiz.

***babel.config.cjs***

Dentro de este archivo deberemos de pegar las siguiente lineas de codigo:

```

module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }
    ]
   ],
};

```

- Posteriormetne creamos una carpeta de pruebas dentro de nuestro ejercicio. Y dentro de ella y archivo, en nuestro caso demo.test.js


Las diferentes funciones las tenemos en la documentacion de jest. Pero para tener los difirentes short-cuts o accesos rapidos en Visual Studio Code deberemos desacargarnos la siguiente configuracion

```
   npm add -D @types/jest
```

### 3.2 CREACION DE PRUEBAS

Para crear las purebas debemos de crear una carpeta a modo de espejo los archivos que queremos probar.

En nuestro caso para probar ***02-template-string***, tendremos que crear el archivo  ***02-template-string.test.js***.

- Debemos de crear una estructura que se inicializara con una descripcion:
```

describe('Nombre que queramos probar', () => {  });

```
- Dentro de nuestro describe incluiremos los diferentes tests:
```

   test('Lo que queremos probar', () => { });

```
- Y en los diferentes test definiremos que esperamos encontrar

```

   expect(nuestraPrueba).metodoComparacion(ResultadoArchivo)

```

En nuestro ejemplo de *02-template-string.test.js*, probaremos que el string resultante del ***Saludo*** es exactamente el mismo que el de nuestro metodo de ***getSaludo***, de nuestro archivo *02-template-string*.

Para ello creamos dos constantes, una para definir el ***nombre*** y otro para recoger el resultado del metodo pasandole por parametros el ***nombre***. Luego definimos el resultado esperedo, utilizando el método definido de Jest ***toBe***.
```

   describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe retornar "Hola Mundo"', () => {
      
        const name = "Fernando";
        const msg = getSaludo( name );

        expect( msg ).toBe(`Hola ${ name }`)

    });
   });

```

