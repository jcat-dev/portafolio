export interface StackType {
  title: string
  skills: string[]
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

export interface ProjectWithId extends Project {
  _id: string
}