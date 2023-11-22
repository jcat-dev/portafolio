import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'

export const projectsLoader = async () => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROJECT_API), 'GET')
    const data: FetchResponseWithData<ProjectWithId[]> = await result.json()

    return data.data
  } catch (error) {
    return []
  }
}

export const newProjectLoader = async () => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    const data: FetchResponseWithData<SkillWithId[]> = await result.json()

    return data.data
  } catch (error) {
    return []
  }
}

