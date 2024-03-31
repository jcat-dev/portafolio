import {  useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import ProjectForm from './components/ApiProjectForm'

const ApiNewProjectPage = () => {
  const data = useLoaderData() as SkillWithId[] | []

  return (
    <ProjectForm 
      stacksType={data}
    />
  )
}

export default ApiNewProjectPage