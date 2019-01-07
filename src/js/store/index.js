import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// reducers make the state of your application in redux
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)),
);

export default store;
