import axios from 'axios'

import { API_URL } from '../constants'
const getRequest = url => {
  return axios
    .get(url, {
      headers: {
        Authorization: `Token token="aa348270e24b59abcf85265bb315fa86"`
      }
    })
    .catch(err => console.error(err))
}

export default {
  getAll: _ => getRequest(API_URL),
  getQuery: query => getRequest(`${API_URL}?filter=${query}&type=tag`)
}
