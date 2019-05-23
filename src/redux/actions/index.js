import axios from 'axios';
import { GET_NEWS } from './types.js';

const apiUrl = 'http://api.tuintra.com/ginerdelosrios.es';

export const getNews = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/news`)
      .then(response => {
        dispatch(fetchNews(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchNews = (news) => {
  return {
    type: GET_NEWS,
    news
  }
};