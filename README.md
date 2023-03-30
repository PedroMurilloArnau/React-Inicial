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


