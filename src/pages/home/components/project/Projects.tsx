import { useLoaderData } from 'react-router-dom'
import styles from './index.module.css'
import { ProjectWithId } from '../../../../Types/Project'
import StackType from './StackType'

const Projects = () => {
  const projects = useLoaderData() as ProjectWithId[]

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
          projects.map((value, index) => (
            <li
              className={styles['projects-list__item']}
              key={index}
            >
              <div className={`${styles['face']} ${styles['face-front']}`} >
                <h3 className={styles['face-front__title']} >
                  {value.stackTitle}
                </h3>

                <img 
                  className={styles['face-front__img']}
                  src={value.pageImgURL} 
                  alt="page image" 
                />
              </div>

              <div className={`${styles['face']} ${styles['face-back']}`} >
                <p className={styles['face-back__page-name']} >
                  {value.pageURL}
                </p>  

                <p className={styles['face-back__description']} >
                  {value.description}
                </p>         

                <div className={styles['face-back__stack']} >
                  {
                    value.stackType.map((value, index) => (
                      <StackType
                        key={index}
                        title={value.title}
                        list={value.skills}
                      />
                    ))
                  }
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
                    href={value.repositoryURL} 
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