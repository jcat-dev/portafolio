import { useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import StackTypeCard from '../../../component/card/StacksTypeCard'
import LinkButton from '../../../component/button/LinkButton'
import styles from './css/apiSkillsPage.module.css'

const ApiSkillsPage = () => {
  const loaderSkills = useLoaderData() as (SkillWithId[] | null)
  const [skills, setSkills] = useState<SkillWithId[] | undefined>(loaderSkills ?? undefined)

  const handleDeleteStack = async (id: string) => {    
    setSkills(skills?.filter((value) => value._id !== id))
  }

  return (
    <main className={styles['container']} >
      <LinkButton
        to={'new'}
        className={styles['add-btn']}
        aria-label='create new skills'
      >
        <FontAwesomeIcon 
          icon={faPlus} 
          size='lg'
        />
      </LinkButton>

      {
        skills && <StackTypeCard 
          stackType={skills} 
          devMode={true} 
          onDelete={handleDeleteStack} 
        />        
      }
    </main>
  )
}

export default ApiSkillsPage