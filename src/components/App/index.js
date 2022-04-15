/* eslint-disable max-len */

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
  // Je garde une trace du dernier mot validé
  const [inputValidate, setInputValidate] = useState('react');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [message, setMessage] = useState('Effectuez une recherche pour connaitre le nombre de résultat disponible...');

  // Je lance une requete axios pour demander les premiéres data à GitHub
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      setLoading(true);
      setActivePage(1);
      const filter = '&sort=star&order=desc&page=1&per_page=12';

      const response = await axios({
        method: 'get',
        url: `${url}${inputSearch}${filter}`,
      });
        // ancien résultats, plus les nouveaux !
      setData(response.data.items);
      setMessage(`Votre recherche a donné ${response.data.total_count} résultats !`);
    }
    catch (error) {
      console.trace(error);
    }
    finally {
      setLoading(false);
    }
  };

  // Je lance une requete axios pour demander les data à GitHub, qu'on va rajouter a nos données éxistantes
  const fetchMoreData = async () => {
    try {
      setLoading(true);
      console.log('activepage => ', activePage);
      const filter = `&sort=star&order=desc&page=${activePage + 1}&per_page=12`;

      const response = await axios({
        method: 'get',
        url: `${url}${inputSearch}${filter}`,
      });
        // ancien résultats, plus les nouveaux !
      setData([...data, ...response.data.items]);
      setMessage(`Votre recherche a donné ${response.data.total_count} résultats !`);
    }
    catch (error) {
      console.trace(error);
    }
    finally {
      setLoading(false);
    }
  };

  // Je cherche direct "react" quand je lance mon app !
  useEffect(fetchData, []);

  const onChange = (newValue) => {
    setInputSearch(newValue);
  };

  const onSubmit = () => {
    setInputValidate(inputSearch);
    if (inputSearch === '') {
      setData([]);
      setMessage('Effectuez une recherche pour connaitre le nombre de résultat disponible...');
      return;
    }
    if (inputSearch === inputValidate) {
      // pas d'appel à l'API inutile..
      return;
    }
    fetchData();
  };

  // Pour gérer la pagination
  const handleShowMore = () => {
    // NOTE
    // Attention ici activePage N'EST PAS augmenté de 1 avant le fetchMoreData,
    // Cette action semble asynchrone, mais ça maintient à jour l'incrémentation
    // faîte directement dans fetchMoreData...
    // Il y a surement beaucoup plus clean !
    setActivePage(activePage + 1);
    fetchMoreData();
  };

  // Je souhaitre trois comportements principaux :

  // 1) Quand je soumet une string vide, aucun repos renvoyés, les data dans le state sont éffacées
  // 2) Quand je soumet une nouvelle recherche, non vide, les data pré-éxistantes,
  // sont éffacées pour n'afficher ques les repos de cette nouvelles reqûtes !
  // 3) Et je souhaite pouvoir afficher plus de données pour une recherche déja effectué, sans écraser le state, en ajoutrant ces nouvelles données aux anciennes

  // Dans le code :

  // Lors du submit, une supression de toutes les data pré-éxistante.
  // Lors du submit, si inputSearch vaut une string vide, pas d'appel a l'api
  // Lors du submit, si inputSearch ne vaut pas une string vide, appel a l'API et stockage dans le state de ces news data.

  // Probléme rencontrés :

  //! probléme : setData est asynchrone, et je ne peux pas avoir plusieur setData 
  //! dans le même cycle... le dernier setData, effacant tous les autres...
  // => j'opte pour une deuxieme méthode de fetchData qui dans le cas d'une nouvelle recherche avec un nouveau mot,
  // écrasera le state avec les nouveaux résultats

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
        disabled={!!((loading || inputSearch === ''))}
        size="large"
        content={`Afficher plus de repos ? (${data.length} résultats actuellement)`}
        icon="plus"
        onClick={handleShowMore}
      />
      <Footer propsFooter={(new Date()).getFullYear()} />
    </div>

  );
};
// == Export
export default App;
