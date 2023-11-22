import { proyectList } from './projectsList'
import StackType from './StackType'
import styles from './index.module.css'

const Projects = () => {
  return (
    <section 
      id='proyectos'
      className={styles['projects-container']}
    >
      <h2 className={styles['projects-title']} >
        Proyectos
      </h2>

      <ul className={styles['projects-list']} >
        {
          proyectList.map((value, index) => (
            <li
              className={styles['projects-list__item']}
              key={index}
            >
              <div className={styles['face face-front']} >
                <h3 className={styles['face-front__title']} >
                  {value.stackType.name}
                </h3>

                <img 
                  className={styles['face-front__img']}
                  src={value.pageImg} 
                  alt="page image" 
                />
              </div>

              <div className={styles['face face-back']} >
                <p className={styles['face-back__page-name']} >
                  {value.pageName}
                </p>  

                <p className={styles['face-back__description']} >
                  {value.description}
                </p>         

                <div className={styles['face-back__stack']} >
                  <StackType
                    title='Front End'
                    list={value.stackType.frontendSkills}
                  />

                  <StackType
                    title='Back End'
                    list={value.stackType.backendSkills}
                  />

                  <StackType
                    title='Base de dato'
                    list={value.stackType.databaseSkills}
                  />
                </div>

                <div className={styles['face-back__link']} >
                  <a 
                    className={styles['face-back__link-url']}
                    href={value.pageURL} 
                    target='_blank' 
                  >
                  Ver
                  </a>

                  <a 
                    className={styles['face-back__link-repository']}
                    href={value.repository} 
                    target='_blank' 
                  >
                  Github
                  </a>
                </div>
              </div>             
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Projects