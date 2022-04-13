// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import HeaderCustum from '../HeaderCustum';
import Main from '../Main';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <HeaderCustum propsHeader="ici mon logo GitHub" />
    <Main propsMain="toujours en React !" />
    <Footer propsFooter={(new Date()).getFullYear()} />
  </div>
);
// == Export
export default App;
