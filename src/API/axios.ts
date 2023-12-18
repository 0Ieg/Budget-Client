import axios from 'axios';

export const myAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization:`Bearer ${localStorage.getItem('access_token')}`
  }
})