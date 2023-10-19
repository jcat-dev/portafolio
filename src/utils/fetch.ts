type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const getFetch = (api: string) => {
  return setFetch(api, 'GET')
}

export const postFetch = (api: string, body: object) => {
  return setFetch(api, 'POST', body)
}

export const putFetch = (api: string, body: object) => {
  return setFetch(api, 'PUT', body)
}

export const deleteFetch = (api:string) => {
  return setFetch(api, 'DELETE')
} 

const setFetch = async (api: string, method: Method, body?: object) => {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'Application/json'
    }
  } 

  if (body) {
    config.body = JSON.stringify(body)
  }

  return fetch(api, config)
}
