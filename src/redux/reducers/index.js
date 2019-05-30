import { combineReducers } from 'redux';
import { formatClubInfo } from './format-club-info.js';

export default combineReducers({
  clubInfo: (state = [], action) => formatClubInfo(action.info) || state,
  news: (state = [], action) => action.news || state,
  teams: (state = [], action) => action.teams || state,
});