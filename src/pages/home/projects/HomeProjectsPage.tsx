import { ProjectWithId } from '../../../Types/Project'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './homeProjectsPage.module.css'
import ParticlesBg from '../../../component/particle/ParticlesBg'
import LoadingImage from '../../../component/loading/LoadingImage'

const HomeProjectsPage = () => {
  const data = useLoaderData() as ProjectWithId[]
  const [projects, setProjects] = useState<ProjectWithId[]>()

  useEffect(() => {
    setProjects(
      data.map((value) => {
        return {
          ...value,
          stackType: value.stackType.filter((value) => value.skills.length > 0)
        }
      })
    )
  }, [data])

  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        Projects
      </h1>

      <ul className={styles['projects']} >
        {
          projects?.map((projectValue, projectIndex) => (
            <li
              className={styles['projects__item']}
              key={projectIndex}
            >
              <ParticlesBg 
                containerClassName={styles['particulas']} 
                id={String(projectValue.stackTitle) + projectIndex}
                option='default'
                backgroundColor='#000000'
                fullScreen={false}
              />
              
              <div className={`${styles['face']} ${styles['face-front']}`} >
                <h2 className={styles['face-front__title']} >
                  {projectValue.stackTitle}
                </h2>

                <LoadingImage 
                  classNameContainer={styles['face-front__img-container']}
                  classNameImg={styles['face-front__img']}
                  src={projectValue.pageImgURL} 
                  alt="page image" 
                />
              </div>

              <div className={`${styles['face']} ${styles['face-back']}`} >
                <p className={styles['face-back__project-title']} >
                  {projectValue.projectTitle}
                </p>  

                <p className={styles['face-back__description']} >
                  {projectValue.description}
                </p>         

                <div className={styles['face-back__stack']} >
                  {
                    projectValue.stackType.map((stackTypeValue, stackTypeIndex) => (
                      <ul 
                        className={styles['stack-type']} 
                        key={stackTypeIndex}
                      >
                        <p className={styles['stack-type__title']} >
                          {stackTypeValue.title}:
                        </p>
      
                        {
                          stackTypeValue.skills.map((skillValue, skillIndex) => (
                            <li
                              key={skillIndex}
                              className={styles['stack-type__item']}
                            >
                              {skillValue}
                            </li>
                          ))
                        }
                      </ul>
                    ))
                  }
                </div>

                <div className={styles['face-back__link']} >
                  <a 
                    className={styles['face-back__link-url']}
                    href={projectValue.pageURL} 
                    target='_blank' 
                  >
                    Ver
                  </a>

                  <a 
                    className={styles['face-back__link-repository']}
                    href={projectValue.repositoryURL} 
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
    </main>
  )
}

export default HomeProjectsPage