import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

// this is redux middleware triggered when the action type ADD_ARTICLE is sent
// it checks for forbidden words and if the title contains a word,
// it dispatches an action type of "FOUND_BAD_WORD", otherwise, let the action pass
const forbiddenWords = ['spam', 'money'];

// you should always return next(action) in your middlewares.
// If you forget to return next(action) the application will stop,
// and no other action will reach the reducer.

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.toLowerCase().includes(word),
        );

        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD });
        }
      }
      return next(action);
    };
  };
}
