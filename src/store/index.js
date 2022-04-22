import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from './reducer';
import middleware from '../middlewares';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(middleware),

// import middlewares
));

export default store;
