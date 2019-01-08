import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED,
} from '../constants/action-types';

// redux principles: original state is immutable (we make new copies, don't mutate existing data)
const initialState = {
  articles: [],
  message: '',
  remoteArticles: [],
};

// reducers take two params; the current state and an action
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message: '',
    });
  } else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      message: `Bad word found, title wasn't added`,
    });
  } else if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
