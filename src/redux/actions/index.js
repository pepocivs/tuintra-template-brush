import axios from 'axios';

const apiUrl = 'http://api.tuintra.com/ginerdelosrios.es';

const axiosGet = (dispatch, endpoint, params = {}) => {
  return axios.get(`${apiUrl}/${endpoint}`, params)
    .then(response => {
      dispatch({
        type: `GET_${endpoint.toUpperCase()}`,
        [endpoint]: response.data })
    })
    .catch(error => { throw(error) });
};

export const getNews = () => (dispatch) => axiosGet(dispatch, 'news');
export const getInfo = () => (dispatch) => axiosGet(dispatch, 'info');
export const getTeams = () => (dispatch) => axiosGet(dispatch, 'teams');
