import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProfileWithId } from '../../../Types/Profile'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import { getToastError } from '../../../utils/toast'
import { PROFILE_LOADER_MSG } from '../../../constants/TOAST_MSG'

export const apiProfileLoader = async (): Promise<ProfileWithId | null> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROFILE_API), 'GET')

    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<ProfileWithId[]> = await result.json()
      //React Router toma como error si se retorna undefined
      return data.data[0] ?? null 
    }

    getToastError(await result.text())
    return null
  } catch (error) {
    getToastError(PROFILE_LOADER_MSG)
    return null
  }
}