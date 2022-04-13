// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

// == Import
import './styles.scss';
import HeaderCustum from '../HeaderCustum';
import Main from '../Main';
import Footer from '../Footer';

const url = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (newValue) => {
    setInputSearch(newValue);
  };

  const onSubmit = async () => {
  // Je lance une requete axios pour demander les data a GitHub
  // Je met a jout mon state, avec ces nouvelles data via setData
    try {
      setLoading(true);
      const response = await axios({
        method: 'get',
        url: `${url}${inputSearch}`,
      });
      console.log('response.data => ', response.data); // item avec un tableau de 30 objets et total_count pour notre nombre de résultats
      setData(response.data);
    }
    catch (error) {
      console.trace(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (

    <div className="app">
      <HeaderCustum
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
