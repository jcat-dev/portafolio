export interface Response {
  msg: string
}

export interface ResponseWithData<T> extends Response {
  data: T
}