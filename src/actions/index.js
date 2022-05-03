// Par convention, on nomme la string comme le nom de la variable, en MAJUSCULE.
export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const CHANGE_INPUT_VALIDATE = 'CHANGE_INPUT_VALIDATE';
export const LOADING = 'LOADING';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_MORE_DATA = 'FETCH_MORE_DATA';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

// je fais une fonction pour fabriquer un objet d'action



export const changeInputSearch = (inputSearch) => ({
  type: CHANGE_INPUT_SEARCH,
  inputSearch,
});

export const changeInputValidate = (inputValidate) => ({
  type: CHANGE_INPUT_VALIDATE,
  inputValidate,
});

export const loading = (bool) => ({
  type: LOADING,
  bool,
});

export const activePage = (pageNumber) => ({
  type: ACTIVE_PAGE,
  pageNumber,
});

export const saveData = (data) => ({
  type: SAVE_DATA,
  data,
});

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

//!
export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchMoreData = () => ({
  type: FETCH_MORE_DATA,
});
