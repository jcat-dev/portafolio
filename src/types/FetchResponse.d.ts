export interface FetchResponse {
  msg: string
}

export interface FetchResponseWithData<T> extends FetchResponse {
  data: T
}

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'