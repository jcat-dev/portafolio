import { useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import ApiSkillsForm from './components/ApiSkillsForm'

const ApiEditSkillPage = () => {
  const data = useLoaderData() as (SkillWithId | null)

  return (
    <ApiSkillsForm 
      data={data ?? undefined}
      isNew={false}
    />
  )
}

export default ApiEditSkillPage