import { FetchResponseWithData } from '../../../types/FetchResponse'
import { SkillWithId } from '../../../types/Skill'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import { getToastError } from '../../../utils/toast'
import { SKILLS_LOADER_MSG } from '../../../constants/TOAST_MSG'

export const homeSkillsLoader = async (): Promise<SkillWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')

    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(await result.text())
    return []
  } catch (error) {
    getToastError(SKILLS_LOADER_MSG)
    return []
  }
}