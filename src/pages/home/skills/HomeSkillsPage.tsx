import { SkillWithId } from '../../../Types/Skill'
import { useLoaderData } from 'react-router-dom'
import styles from './homeSkillsPage.module.css'

const HomeSkillsPage = () => {  
  const skills = useLoaderData() as SkillWithId[]
  
  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        HABILIDADES
      </h1>

      <ul className={styles['stacks']} > 
        {
          skills.map((value) => (
            <li
              key={value._id}
              className={styles['stacks__item']}
            >
              <h2 className={styles['stacks__item-title']} >
                {value.title}
              </h2>

              <ul className={styles['skills']}>
                {
                  value.skills.map((value, index) => (
                    <li 
                      key={index}
                      className={styles['skills__item']}
                    >
                      {value}
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }    
      </ul>   
    </main>
  )
}

export default HomeSkillsPage