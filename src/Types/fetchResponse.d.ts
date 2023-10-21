export interface FetchResponse {
  msg: string
}

export interface FetchResponseWithData<T> extends FetchResponse {
  data: T
}