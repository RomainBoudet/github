/* eslint-disable max-len */

// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
// import { useDispatch } from 'react-redux';

// == Import
import './styles.scss';
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import Footer from '../Footer';

import { useGetAllReposQuery } from '../../api';


// == Composant
const App = ({ fetchReact }) => {
  
  //! test de Redux RTK qery :
  const { data } = useGetAllReposQuery()
  console.log("data ==> ", data);

  useEffect(() => {
    fetchReact();
  }, []); 

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

App.propTypes = {
  fetchReact: PropTypes.func.isRequired,
};

// == Export
export default App;
