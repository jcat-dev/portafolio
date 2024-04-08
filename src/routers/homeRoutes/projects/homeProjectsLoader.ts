import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { setFetch } from '../../../utils/fetch'
import { getToastError } from '../../../utils/toast'

export const homeProjectsLoader = async (): Promise<ProjectWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROJECT_API), 'GET')
    
    if (result.status === 200) {
      const data: FetchResponseWithData<ProjectWithId[]> = await result.json()
      return data.data
    }
    
    getToastError(result.statusText)
    return []
  } catch (error) {
    getToastError('Error al cargar los proyectos.')
    return []
  }
}