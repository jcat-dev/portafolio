import {  useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import ProjectForm from './components/ProjectForm'

const NewProject = () => {
  const data = useLoaderData() as SkillWithId[]

  return (
    <ProjectForm 
      stacksType={data}
    />
  )
}

export default NewProject