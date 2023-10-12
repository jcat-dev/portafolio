export interface StackType {
  name: string
  frontendSkills: string[]
  backendSkills: string[]
  databaseSkills: string[]
}

export interface Project {
  stackType: StackType
  repository: string
  pageName: string
  pageURL: string
  pageImg: string
  description: string
}