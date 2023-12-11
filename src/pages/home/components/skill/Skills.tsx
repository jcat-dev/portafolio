import { useEffect, useState } from 'react'
import { SkillWithId } from '../../../../Types/Skill'
import { setFetch } from '../../../../utils/fetch'
import { FetchResponseWithData } from '../../../../Types/FetchResponse'
import { getToastError } from '../../../../utils/toast'
import ParticlesBg from '../../../../component/particle/ParticlesBg'
import styles from './skills.module.css'

const Skills = () => {  
  const [skills, setSkills] = useState<SkillWithId[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await setFetch(String(import.meta.env.VITE_SKILL_API), 'GET')
        const data: FetchResponseWithData<SkillWithId[]> = await result.json()

        setSkills(data.data)
      } catch (error) {
        getToastError('Error al cargar las habilidades')
      }
    } 

    getData()
  }, [])
  
  return (
    <section 
      id='habilidades' 
      className={styles['container']} 
    >
      <ParticlesBg 
        id='skills-bg'
        option='default'
      />

      <div className={styles['skills-container']} >
        <h2 className={styles['title']} >
          Habilidades
        </h2>
           
        {
          skills.map((value) => (
            <div
              key={value._id}
              className={styles['skills']}
            >
              <p className={styles['skills-title']} >
                {value.title}
              </p>

              <ul className={styles['skills-list']}>
                {
                  value.skills.map((value, index) => (
                    <li 
                      key={index}
                      className={styles['skills-list__item']}
                    >
                      {value}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }       
      </div>
    </section>
  )
}

export default Skills