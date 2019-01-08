import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';

// redux-thunk you can return functions from action creators, not only objects.
// You can do asynchronous work inside your actions and dispatch other actions in response to AJAX calls
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// reducers make the state of your application in redux
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)),
);

export default store;
