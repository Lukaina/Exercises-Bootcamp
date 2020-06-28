//1. Importar dependencias de React.
import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.css';
//6. Importar y usar el componente en donde sea requerido.
//import Picker from './components/Picker';

render(<Router />, document.getElementById('main'));

