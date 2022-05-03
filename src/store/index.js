import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import rootMiddleware from '../middlewares';
import { githubApi } from '../api';

// Pour préchargér des data en provenance du localStorage de l'utilisateur :
// https://redux.js.org/tutorials/fundamentals/part-4-store 
const preloadedState = {
  inputSearch: 'react',
  inputValidate: '',
  data: [],
  loading: false,
  activePage: 1,
  message: 'Effectuez une recherche pour connaitre le nombre de résultat disponible...',
};

const store = configureStore({
  reducer: {
    rootReducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware, rootMiddleware), // rajoute au MW par défault : https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState, // Pas de preloadState avec la combinaison du reducer de createApi sion on plante ??
});

export default store;


