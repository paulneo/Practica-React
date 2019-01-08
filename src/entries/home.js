import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')

// const p = document.getElementById('p')
// const holaMundo = <h1>Hola Mundo!</h1>;


//  que vamos a imprimir , y donde lo vamos a imprimir
render( <Home data={data}/>, homeContainer);
// render( <h1>Holi</h1>, p);
