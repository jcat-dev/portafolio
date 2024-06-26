import { FetchResponseWithData } from '../../../types/FetchResponse'
import { SkillWithId } from '../../../types/Skill'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import { getToastError } from '../../../utils/toast'
import { SKILLS_LOADER_MSG, SKILL_LOADER_MSG } from '../../../constants/TOAST_MSG'

export const apiSkillsLoader = async (): Promise<SkillWithId[] | null> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    
    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(await result.text())
    return null
  } catch (error) {
    getToastError(SKILLS_LOADER_MSG)
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiEditSkillLoader = async ({ params }: any): Promise<SkillWithId | null> => {
  try {
    const result = await setFetch(`${String(import.meta.env.VITE_SKILL_API)}/${params.id}`, 'GET')

    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<SkillWithId> = await result.json()
      return data.data
    }

    getToastError(await result.text())
    return null
  } catch (error) {
    getToastError(SKILL_LOADER_MSG)
    return null
  }
}