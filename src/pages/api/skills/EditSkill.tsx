import { useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import SkillsForm from './components/SkillsForm'

const EditSkill = () => {
  const data = useLoaderData() as (SkillWithId | null)

  return (
    <SkillsForm 
      data={data ?? undefined}
      isNew={false}
    />
  )
}

export default EditSkill