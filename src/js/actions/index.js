// every action needs a type property
// it's best practice to wrap every action within a function, which is known as an action creator
import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
