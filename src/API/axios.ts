import axios from 'axios';

export const myAxios = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization:`Bearer ${localStorage.getItem('access_token')}`
  }
})