import { GET_INFO, GET_NEWS } from '../actions/types.js';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case GET_INFO:
      return action.info;
    case GET_NEWS:
      return action.news;
    default:
      return state;
  }
}