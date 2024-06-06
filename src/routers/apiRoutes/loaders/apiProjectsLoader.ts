import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import { getToastError } from '../../../utils/toast'
import { PROJECTS_LOADER_MSG, PROJECT_LOADER_MSG, STACK_PROJECTS_LOADER_MSG } from '../../../constants/TOAST_MSG'

export const apiProjectsLoader = async (): Promise<ProjectWithId[] | []> => {
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

export const apiNewProjectLoader = async (): Promise<SkillWithId[] | []> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    
    if (result.status === OK_STATUS) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(await result.text())
    return []
  } catch (error) {
    getToastError(STACK_PROJECTS_LOADER_MSG)
    return []
  }
}

interface EditProject {
  projectWithId: ProjectWithId
  stacksType: SkillWithId[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiEditProjectLoader = async ({ params }: any): Promise<EditProject | null> => {
  try {
    const projectResult = await setFetch(`${String(import.meta.env.VITE_PROJECT_API)}/${params.id}`, 'GET'    )
    const stacksTypeResult = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')

    if (projectResult.status === OK_STATUS && stacksTypeResult.status === OK_STATUS) {
      const projectData: FetchResponseWithData<ProjectWithId> = await projectResult.json()
      const stacksTypeData: FetchResponseWithData<SkillWithId[]> = await stacksTypeResult.json()

      return {
        projectWithId: projectData.data,
        stacksType: stacksTypeData.data
      }
    } 

    projectResult.status !== OK_STATUS
      ? getToastError(await projectResult.text())
      : getToastError(await stacksTypeResult.text())
      
    return null
  } catch (error) {
    getToastError(PROJECT_LOADER_MSG)
    return null
  }
}