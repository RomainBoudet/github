/* eslint-disable max-len */
import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  changeInputSearch, changeInputValidate, fetchData, saveData, saveMessage,
} from '../actions';
// nom par convention, recoit le state comme propriété
// avec state.quelqueChose, je donne des props qui viennent du state.
// Si rien ne doit provenir de mon state dans ce container => mapStateToProps = null
const mapStateToProps = (state) => ({
  loading: state.loading,
  message: state.message,
  inputSearch: state.inputSearch,
  inputValidate: state.inputValidate,
});

// Si rien ne doit changer mon state => mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({

  // Ce qui provient de mon composant. Ici newValue comprend chacune de mes nouvelles lettres de l'input !
  // pour être porécis : evt.target.value.trim()
  onChange: (newValue) => {
    // Ce qui est dans mon dossier actions
    const action = changeInputSearch(newValue);
    dispatch(action);
  },
  // provient de mon composant
  onSubmit: (newValidate) => {
    // 1) Je valide input validate dans le state
    dispatch(changeInputValidate(newValidate));
    // 2) si inputSearch vaut '', je vie les data, et je change le message,
    //    si inputSearch est identique a inputValidate, on return (dans le component !)
    // Si aucun des 2 cas précédent, on fetchData() !
    if (newValidate === '') {
      dispatch(saveData([]));
      dispatch(saveMessage('Effectuez une recherche pour connaitre le nombre de résultat disponible...'));
      return;
    }
    // Va ensuite dans mon dossier action, pour la cas fetchDate, puis dans mon middleware,
    // dans le case FETCH DATA du switch puis dispatch saveData()
    // Le tri pour ne pas lancer l'appel a l'API si inputValidate est === inputSearch se fait dans le MW, fetchData
    const action = fetchData();
    dispatch(action);
  },
});

/* const createContainer = connect(mapStateToProps, mapDispatchToProps);
const monContainer = createContainer(Header);
export default monContainer; */

// J'éxécute connect en lui fialnt mapStateToProps et mapDispatchToProps qui
// va me renvoyer une nouvelle fonction. Cette fonction attend que je l'exécute
// en lui donnant un argument : Le composant à qui je veux donner tous les props !

// Et j'exporte ce contaner qui sera utilisé dans App a la place du Dumb componant initial !
// l'ordre a une importance : 1er arguments state 2iém arguments dispatch.
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// Ordre de travail :
// 1) Je réalise on composant (dumb componant). Je lui donne les props qu'il a besoin.
// 2) Je construit mon container (smart componant). Pour faire le lien avec Redux.
// je me demande si mon composant a besoin de consulteer le state ? si Non => mapStateToProp = null
// Je me demande si mon composant a besoin de dispatcher des actions ? Si non, mapsDispatchToProps = {}
// Si oui, je lui passe ce qu'attend mon dumb composant !
