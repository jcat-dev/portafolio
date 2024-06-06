export interface Profile {
  title: string
  stackTitle: string
  fullName: string
  description: string
}

export interface ProfileWithId extends Profile {
  _id: string
}