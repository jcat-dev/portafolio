import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'

export const projectsLoader = async (): Promise<ProjectWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROJECT_API), 'GET')
    const data: FetchResponseWithData<ProjectWithId[]> = await result.json()

    return data.data
  } catch (error) {
    return []
  }
}

export const newProjectLoader = async (): Promise<SkillWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    const data: FetchResponseWithData<SkillWithId[]> = await result.json()

    return data.data
  } catch (error) {
    return []
  }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editProjectLoader = async ({ params }: any): Promise<ProjectWithId | undefined> => {
  try {
    const result = await setFetch(`${String(import.meta.env.VITE_PROJECT_API)}/${params.id}`, 'GET'    )
    const data: FetchResponseWithData<ProjectWithId> = await result.json()

    return data.data
  } catch (error) {
    return undefined
  }
}