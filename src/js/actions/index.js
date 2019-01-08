// every action needs a type property
// it's best practice to wrap every action within a function, which is known as an action creator
import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_LOADED,
} from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function foundBadWord() {
  return { type: FOUND_BAD_WORD };
}

// the fetch call gets returned from an outer function and the outer function has dispatch as a parameter.
// If you want to access the state inside the action creator you can add getState in the parameter’s list.
// notice the use of dispatch inside then. We need to explicitly call dispatch inside the async function for dispatching the action
export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => response.json(),
        error => console.log('An error occurred. ', error),
      )
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
