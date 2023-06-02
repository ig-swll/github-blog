import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  params: {
    Accept: 'application/vnd.github+json',
  },
})
