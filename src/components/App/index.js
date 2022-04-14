/* eslint-disable max-len */
// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

import axios from 'axios';

// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const url = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [inputSearch, setInputSearch] = useState('react');
  // je souhaite différencier ce qui peut être tapé, et ce qui a été validé par le user !
  const [inputValidate, setInputValidate] = useState('react');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [message, setMessage] = useState('Effectuez une recherche pour connaitre le nombre de résultat disponible...');
  const [count, setCount] = useState(0);

  const onChange = (newValue) => {
    setInputSearch(newValue);
  };

  // Je lance une requete axios pour demander les data à GitHub
  // si inputSearch et vide, pas d'appel a l'API pour rien !
  const fetchData = async () => {
    if (inputSearch === '') {
      setData([]);
      // ou return; si je veux pas éffacer
    }
    else {
      try {
        setLoading(true);
        const filter = `&sort=star&order=desc&page=${activePage}&per_page=12`;

        const response = await axios({
          method: 'get',
          url: `${url}${inputSearch}${filter}`,
        });
        // ancien résultats, plus les nouveaux !
        setData([...data, ...response.data.items]);
        setMessage(`Votre recherche a donné ${response.data.total_count} résultats !`);
        setCount(response.data.total_count);
      }
      catch (error) {
        console.trace(error);
      }
      finally {
        setLoading(false);
      }
    }
  };

  const onSubmit = () => {
    setActivePage(1);
    setInputValidate(inputSearch);
    if (inputValidate === '' && count === 0) {
      setMessage('Effectuez une recherche pour connaitre le nombre de résultat disponible...');
      console.log('on passe');
    }
    else {
      fetchData();
    }
    console.log('data 2 =>', data);
  };

  // Pour gérer la pagination
  const handleShowMore = () => {
    setActivePage(activePage + 1);
  };

  // Je cherche direct "react" quand je lance mon app !
  // En chargeant bien la page active. et je reFetch à chaque nouvelle page !
  useEffect(fetchData, [activePage]);

  return (

    <div className="app">
      <Header
        inputSearch={inputSearch}
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
        message={message}
      />
      <Main data={data} loading={loading} />
      <Button
        className="buttonmorerepo"
        fluid
        color="violet"
        loading={loading}
        disabled={!!((loading || inputValidate === ''))}
        size="large"
        content={activePage === 1 && inputValidate === '' ? 'Commencer par rechercher un repo...' : `Afficher plus de repos lié à "${inputValidate}" ?     (${data.length} résultats actuellement)`}
        icon="plus"
        onClick={handleShowMore}
      />
      <Footer propsFooter={(new Date()).getFullYear()} />
    </div>

  );
};
// == Export
export default App;
