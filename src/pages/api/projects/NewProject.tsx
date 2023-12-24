import {  useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import ProjectForm from './components/ProjectForm'

const NewProject = () => {
  const skills = useLoaderData() as SkillWithId[]

  return (
    <ProjectForm 
      isNewForm={true}
      selectedSkills={[]}
      selectedStackType={[]}
      skills={skills}
    />
  )
}

export default NewProject