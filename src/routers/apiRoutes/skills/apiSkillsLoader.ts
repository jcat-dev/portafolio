import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'
import { getToastError } from '../../../utils/toast'

export const apiSkillsLoader = async (): Promise<SkillWithId[] | null> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    
    if (result.status === 200) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(result.statusText)
    return null
  } catch (error) {
    getToastError('Error al cargar los skills')
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiEditSkillLoader = async ({ params }: any): Promise<SkillWithId | null> => {
  try {
    const result = await setFetch(`${String(import.meta.env.VITE_SKILL_API)}/${params.id}`, 'GET')

    if (result.status === 200) {
      const data: FetchResponseWithData<SkillWithId> = await result.json()
      return data.data
    }

    getToastError(result.statusText)
    return null
  } catch (error) {
    getToastError('Error al buscar el skill')
    return null
  }
}