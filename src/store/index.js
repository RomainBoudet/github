import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import rootMiddleware from '../middlewares';

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
  reducer: rootReducer,
  middleware: [rootMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
