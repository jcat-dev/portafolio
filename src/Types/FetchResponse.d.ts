export interface FetchResponse {
  msg: string
}

export interface FetchResponseWithData<T> extends FetchResponse {
  data: T
}

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'