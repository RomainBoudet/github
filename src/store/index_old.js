import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import rootMiddleware from '../middlewares';


// import middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(rootMiddleware),

// import middlewares
));

export default store;
