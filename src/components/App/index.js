// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const url = 'https://api.github.com/search/repositories?q=';
// une sortie trié par les repo les plus populaire au moin populaire, avec les 12 premiers résultats
const filter = '&sort=star&order=desc&page=1&per_page=12';

// == Composant
const App = () => {
  const [inputSearch, setInputSearch] = useState('react');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (newValue) => {
    setInputSearch(newValue);
  };

  const onSubmit = async () => {
  // Je lance une requete axios pour demander les data a GitHub
  // Je met a jout mon state, avec ces nouvelles data via setData
  // si inputSearch et vide, pas d'appel a l'API pour rien !
    if (inputSearch === '') {
      setData([]);
    }
    else {
      try {
        setLoading(true);
        const response = await axios({
          method: 'get',
          url: `${url}${inputSearch}${filter}`,
        });
        setData(response.data);
      }
      catch (error) {
        console.trace(error);
      }
      finally {
        setLoading(false);
      }
    }
  };

  // Je cherche direct "react" quand je lance mon app !
  // J'aurais aussi pu faire une fonction fetchData qui est lancé par onSubmit.
  // et ainsi utiliser fetchData ici aprés le premier render... plus propre..
  useEffect(onSubmit, []);

  return (

    <div className="app">
      <Header
        inputSearch={inputSearch}
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
        count={data.total_count}
      />
      <Main data={data.items} loading={loading} />
      <Footer propsFooter={(new Date()).getFullYear()} />
    </div>

  );
};
// == Export
export default App;
