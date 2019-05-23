import { combineReducers } from 'redux';
import news from './postReducer';

export default combineReducers({
    news: news
});