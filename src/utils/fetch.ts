type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const setFetch = (api: string, method: Method, body?: object) => {
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
