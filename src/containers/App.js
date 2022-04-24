/* eslint-disable max-len */
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import App from '../components/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  // provient de mon composnant
  fetchReact: () => {
    // Provient de mon dossier actions
    // je fabrique une action pour la dispatcher
    const action = fetchData();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Ordre de travail :
// 1) Je réalise on composant (dumb componant). Je lui donne les props qu'il a besoin.
// 2) Je construit mon container (smart componant). Pour faire le lien avec Redux.
// je me demande si mon composant a besoin de consulteer le state ? si Non => mapStateToProp = null
// Je me demande si mon composant a besoin de dispatcher des actions ? Si non, mapsDispatchToProps = {}
// Si oui, je lui passe ce qu'attend mon dumb composant !

//! Voir plus de comments in container/Header
