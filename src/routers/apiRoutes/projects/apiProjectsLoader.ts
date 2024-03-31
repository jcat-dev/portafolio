import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { ProjectWithId } from '../../../Types/Project'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'
import { getToastError } from '../../../utils/toast'

export const apiProjectsLoader = async (): Promise<ProjectWithId[] | []> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_PROJECT_API), 'GET')
    
    if (result.status === 200) {
      const data: FetchResponseWithData<ProjectWithId[]> = await result.json()
      return data.data
    }

    getToastError(result.statusText)
    return []
  } catch (error) {
    getToastError('Error al cargar los proyectos')
    return []
  }
}

export const apiNewProjectLoader = async (): Promise<SkillWithId[] | []> => {
  try {
    const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
    
    if (result.status === 200) {
      const data: FetchResponseWithData<SkillWithId[]> = await result.json()
      return data.data
    }

    getToastError(result.statusText)
    return []
  } catch (error) {
    getToastError('Error al cargar los tipos de stacks')
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

    if (projectResult.status === 200 && stacksTypeResult.status === 200) {
      const projectData: FetchResponseWithData<ProjectWithId> = await projectResult.json()
      const stacksTypeData: FetchResponseWithData<SkillWithId[]> = await stacksTypeResult.json()

      return {
        projectWithId: projectData.data,
        stacksType: stacksTypeData.data
      }
    } 

    projectResult.status !== 200
      ? getToastError(projectResult.statusText)
      : getToastError(stacksTypeResult.statusText)
      
    return null
  } catch (error) {
    getToastError('Error al cargar el proyecto')
    // retornar undefined, hace que react-router lo tome como un error,
    // lo cual te redirecciona a otra page.
    return null
  }
}