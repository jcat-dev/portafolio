import { FetchMethod } from '../Types/FetchResponse'

export const setFetch = (api: string, method: FetchMethod, body?: object) => {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  } 

  if (body) {
    config.body = JSON.stringify(body)
  }

  return fetch(api, config)
}
