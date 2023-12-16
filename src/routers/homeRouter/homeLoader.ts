import { FetchResponseWithData } from '../../Types/FetchResponse'
import { ProfileWithId } from '../../Types/Profile'
import { setFetch } from '../../utils/fetch'

export const profileLoader = async (): Promise<ProfileWithId[]> => {
  try {
    const resultProfile = await setFetch(String(import.meta.env.VITE_PROFILE_API), 'GET')
    const dataProfile: FetchResponseWithData<ProfileWithId[]> = await resultProfile.json()
    
    return dataProfile.data
  } catch (error) {
    return []
  }  
}
