// == Import : npm
import React from 'react';
import App from 'src/containers/App';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

// Pour envoyer un fetchData au chargement, mais ne fonctionne pas...
// import { fetchData } from './actions';
//  store.dispatch(fetchData);

// import { BrowserRouter as Router } from 'react-router-dom';
// j'intégre react-router.Je pourrais utiliser la balise Link et Route

//! update pour V18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Provider store={store}><App /></Provider>;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const container = document.getElementById('root');
const root = createRoot(container);
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
