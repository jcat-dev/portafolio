import { useLoaderData } from 'react-router-dom'
import { ProjectWithId } from '../../../Types/Project'
import { SkillWithId } from '../../../Types/Skill'
import ProjectForm from './components/ApiProjectForm'

interface EditProject {
  projectWithId: ProjectWithId
  stacksType: SkillWithId[]
}

const ApiEditProjectPage: React.FC = () => {
  const data = useLoaderData() as EditProject | null
  
  if (!data) {
    return (
      <ProjectForm 
        stacksType={[]}
      />
    )
  }

  const filterUnselectedStacksType = () => {
    return data.stacksType.filter((filteredValue) => !data.projectWithId.stackType.some((someValue) => someValue._id === filteredValue._id))
  }

  const addNewStacksType = () => {
    const resetSkills = filterUnselectedStacksType().map((value) => {
      return {
        ...value,
        skills: []
      }
    })
    
    return data.projectWithId.stackType.concat(resetSkills)
  }

  const addAllStacksType = () => {
    const addAllSkills = data.projectWithId.stackType.map((mapValue) => {
      const isFound = data.stacksType.find((findValue) => findValue._id === mapValue._id)

      if (isFound) {
        const newSkills = new Set(mapValue.skills.concat(isFound.skills))

        return {
          ...isFound,
          skills: [...newSkills]
        }
      }

      return mapValue
    })

    return addAllSkills.concat(filterUnselectedStacksType())
  }
  
  return (
    <ProjectForm 
      projectWithId={{
        ...data.projectWithId,
        stackType: [...addNewStacksType()]        
      }}

      stacksType={data.stacksType}
      allStacksType={addAllStacksType()}
    />
  )
}

export default ApiEditProjectPage