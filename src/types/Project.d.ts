import { SkillWithId } from './Skill'

export interface Project {
  projectTitle: string
  stackTitle: string
  stackType: SkillWithId[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}

export interface ProjectWithId {
  _id: string
  projectTitle: string
  stackTitle: string
  stackType: SkillWithId[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}