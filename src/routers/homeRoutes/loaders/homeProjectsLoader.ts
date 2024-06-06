import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../utils/httpStatus'
import { getToastError } from '../../../utils/toast'
import { PROJECTS_LOADER_MSG } from '../../../utils/toastMsg'

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