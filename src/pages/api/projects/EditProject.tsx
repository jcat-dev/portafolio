import { useLoaderData } from 'react-router-dom'
import { ProjectWithId } from '../../../Types/Project'
import { useEffect, useState } from 'react'
import { SkillWithId } from '../../../Types/Skill'
import { setFetch } from '../../../utils/fetch'
import { FetchResponseWithData } from '../../../Types/FetchResponse'
import { getToastError } from '../../../utils/toast'
import ProjectForm from './components/ProjectForm'

const EditProject: React.FC = () => {
  const projectWithId = useLoaderData() as ProjectWithId | null
  const [skills, setSkills] = useState<SkillWithId[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
        
        if (result.status === 200) {
          const data: FetchResponseWithData<SkillWithId[]> = await result.json()
          return setSkills(data.data)
        }
        
        throw Error
      } catch (error) {
        return getToastError('Error al cargar las habilidades')
      }
    }

    getData()
  }, [])

  return (
    <ProjectForm 
      isNewForm={false}
      projectValues={projectWithId ?? undefined}
      selectedSkills={projectWithId?.stackType.flatMap((value) => value.skills) ?? []}
      selectedStackType={projectWithId?.stackType ?? []}
      skills={skills}
    />
  )
}

export default EditProject