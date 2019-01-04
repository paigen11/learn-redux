import { createStore} from 'redux';
import rootReducer from '../reducers/index';

// reducers make the state of your application in redux
const store = createStore(rootReducer);

export default store;