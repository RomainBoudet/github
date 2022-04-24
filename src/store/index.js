import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import rootMiddleware from '../middlewares';

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
