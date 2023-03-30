import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import { HelloWorld } from './SecondAPP';
import { Variables } from './VariablesAPP';

import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld subTitle={123} title={"Hola soy Pedro"} /> 
        <Variables/>
    </React.StrictMode>
)