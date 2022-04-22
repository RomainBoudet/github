import { CHANGE_INPUT_SEARCH, SHOW_MORE_REPO, SHOW_REPO } from '../actions';

const initialState = {
  inputSearch: 'react',
  inputValidate: 'reat',
  data: [],
  loading: false,
  activePage: 1,
  message: 'Effectuez une recherche pour connaitre le nombre de résultat disponible...',
};

const reducer = (stateActuel = initialState, action = {}) => {
// j'éxamine le .type de chaque action !
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...stateActuel,
        inputSearch: action.inputSearch,
      };





      
    default:
      return stateActuel;
  }
};

export default reducer;
