import { Fragment } from 'React';
import PropTypes from 'prop-types';
import { FirstApp } from './FirstApp';

export const HelloWorld = ( {title , subTitle}) => {

   // console.log(props)

//    if ( !title ) {
//     throw new Error('El title no existe');
//    }

    return (
        // <Fragment>
        //     <h1>Hello World I'm Pedro</h1>
        //     <p>Soy un hijo</p>
        // </Fragment>
        <>
            <h1>Hello World I'm Pedro { title }</h1>
            <p>Soy un hijo { subTitle + 1 }</p>
        </>
    );

}

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}
