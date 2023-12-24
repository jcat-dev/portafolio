export interface StackType {
  title: string
  skills: string[]
}

export interface StackTypeWithId extends StackType {
  _id: string
}

export interface Project {
  projectTitle: string
  stackTitle: string
  stackType: StackType[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}

export interface ProjectWithId {
  _id: string
  projectTitle: string
  stackTitle: string
  stackType: StackTypeWithId[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}