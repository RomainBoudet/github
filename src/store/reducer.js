import {
  ACTIVE_PAGE, CHANGE_INPUT_SEARCH, CHANGE_INPUT_VALIDATE, LOADING, SAVE_DATA, SAVE_MESSAGE,
} from '../actions';

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
    case CHANGE_INPUT_VALIDATE:
      return {
        ...stateActuel,
        inputValidate: action.inputValidate,
      };
    case LOADING:
      return {
        ...stateActuel,
        loading: action.bool,
      };
    case ACTIVE_PAGE:
      return {
        ...stateActuel,
        activePage: action.pageNumber,
      };
    case SAVE_DATA:
      return {
        ...stateActuel,
        data: action.data,
      };
    case SAVE_MESSAGE:
      return {
        ...stateActuel,
        message: action.message,
      };

    default:
      return stateActuel;
  }
};

export default reducer;
