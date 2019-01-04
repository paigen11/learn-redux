import { ADD_ARTICLE} from '../constants/action-types';

// redux principles: original state is immutable (we make new copies, don't mutate existing data)
const initialState = {
  articles: [],
};

// reducers take two params; the current state and an action
function rootReducer(state = initialState, action) {
  if(action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
