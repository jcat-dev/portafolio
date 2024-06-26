import { FetchResponseWithData } from '../../../types/FetchResponse'
import { ProjectWithId } from '../../../types/Project'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import { getToastError } from '../../../utils/toast'
import { PROJECTS_LOADER_MSG } from '../../../constants/TOAST_MSG'

export const homeProjectsLoader = async (): Promise<ProjectWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROJECT_API), 'GET')
    
    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<ProjectWithId[]> = await result.json()
      return data.data
    }
    
    getToastError(await result.text())
    return []
  } catch (error) {
    getToastError(PROJECTS_LOADER_MSG)
    return []
  }
}