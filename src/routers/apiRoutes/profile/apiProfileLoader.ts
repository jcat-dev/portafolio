import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProfileWithId } from '../../../Types/Profile'
import { setFetch } from '../../../utils/fetch'
import { getToastError } from '../../../utils/toast'

export const apiProfileLoader = async (): Promise<ProfileWithId | null> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROFILE_API), 'GET')
    
    if (result.status === 200) {
      const data: FetchResponseWithData<ProfileWithId[]> = await result.json()
      return data.data[0]
    }

    getToastError(result.statusText)
    return null
  } catch (error) {
    getToastError('Error al cargar el perfil')
    return null
  }
}