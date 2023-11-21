export interface Skill {
  title: string
  skills: string[]
}

export interface SkillWithId extends Skill {
  _id: string
}