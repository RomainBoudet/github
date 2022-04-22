// == Import : npm
import React from 'react';
import App from 'src/components/App';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

//import { BrowserRouter as Router } from 'react-router-dom'; // j'intégre react-router.Je pourrais utiliser la balise Link et Route

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Provider strore={store}><App /></Provider>;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
