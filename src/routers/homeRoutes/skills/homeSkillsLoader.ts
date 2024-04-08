import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'
import { getToastError } from '../../../utils/toast'

export const homeSkillsLoader = async (): Promise<SkillWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')

    if (result.status === 200) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(result.statusText)
    return []
  } catch (error) {
    getToastError('Error al cargar las habilidades.')
    return []
  }
}