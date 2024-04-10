import { FetchMethod } from '../Types/FetchResponse'

export const setFetch = (api: string, method: FetchMethod, body?: object) => {
  const token = sessionStorage.getItem('token')

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  } 

  if (token) {
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return fetch(api, config)
}
