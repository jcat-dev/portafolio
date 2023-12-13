export interface Profile {
  stackTitle: string
  fullName: string
  photoUrl: string
  description: string
}

export interface ProfileWithId extends Profile {
  _id: string
}