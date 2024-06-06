import { SkillWithId } from '../../../types/Skill'
import { useLoaderData } from 'react-router-dom'
import StackTypeCard from '../../../components/card/StacksTypeCard'
import styles from './homeSkillsPage.module.css'

const HomeSkillsPage = () => {  
  const skills = useLoaderData() as SkillWithId[]

  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        HABILIDADES
      </h1>    
      
      <StackTypeCard 
        stackType={skills} 
        devMode={false}
      />
    </main>
  )
}

export default HomeSkillsPage