import { combineReducers } from 'redux';

export default combineReducers({
  clubInfo: (state = [], action) => action.info || state,
  news: (state = [], action) => action.news || state,
  teams: (state = [], action) => action.teams || state,
});