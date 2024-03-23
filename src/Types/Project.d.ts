import { SkillWithId } from './Skill'

interface Project {
  projectTitle: string
  stackTitle: string
  stackType: SkillWithId[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}

interface ProjectWithId {
  _id: string
  projectTitle: string
  stackTitle: string
  stackType: SkillWithId[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}