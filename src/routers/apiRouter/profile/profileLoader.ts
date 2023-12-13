import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProfileWithId } from '../../../Types/Profile'
import { setFetch } from '../../../utils/fetch'

export const profileLoader = async (): Promise<ProfileWithId[]> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROFILE_API), 'GET')
    const data: FetchResponseWithData<ProfileWithId[]> = await result.json()

    return data.data
  } catch (error) {
    return []
  }
}