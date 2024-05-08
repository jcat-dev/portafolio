import { ProjectWithId } from '../../../Types/Project'
import { useLoaderData } from 'react-router-dom'
import ParticlesBg from '../../../component/particle/ParticlesBg'
import LoadingImage from '../../../component/loading/LoadingImage'
import Anchor from '../../../component/button/Anchor'
import styles from './homeProjectsPage.module.css'

const HomeProjectsPage = () => {
  const projects = useLoaderData() as ProjectWithId[]

  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        PROYECTOS
      </h1>

      <ul className={styles['projects']} >
        {
          projects?.map((projectValue, projectIndex) => (
            <li
              className={styles['projects-item']}
              key={projectIndex}
            >          
              <div className={`${styles['face']} ${styles['face-front']}`} >
                <h2 className={styles['face-front__title']} >
                  {
                    projectValue.stackTitle
                  }
                </h2>

                <LoadingImage 
                  classNameContainer={styles['face-front__img-container']}
                  classNameLoading={styles['face-front__img-loading']}
                  classNameImg={styles['face-front__img']}
                  src={projectValue.pageImgURL} 
                  alt="todo app image" 
                />
              </div>

              <div className={`${styles['face']} ${styles['face-back']}`} >
                <ParticlesBg 
                  containerClassName={styles['particles']} 
                  canvasClassName={styles['particles-canvas']}
                  id={String(projectValue.stackTitle) + projectIndex}
                  option='default'
                  backgroundColor='#f0f8ff'
                  fullScreen={true}
                />
              
                <p className={styles['face-back__project-title']} >
                  {
                    projectValue.projectTitle
                  }
                </p>  

                <p className={styles['face-back__description']} >
                  {
                    projectValue.description
                  }
                </p>         

                <ul 
                  className={styles['face-back__stacks']} 
                >  
                  {
                    projectValue.stackType.flatMap((value) => value.skills).map((flatValue, flatIndex) => (
                      <li
                        key={flatIndex}
                        className={styles['face-back__stacks-item']}
                      >
                        {
                          flatValue
                        }
                      </li>
                    ))
                  }
                </ul>

                <div className={styles['face-back__link']} >
                  <Anchor 
                    href={projectValue.pageURL} 
                    target='_blank' 
                    className={styles['face-back__link-page']}
                  >
                    Ver
                  </Anchor>

                  <Anchor
                    href={projectValue.repositoryURL} 
                    target='_blank' 
                    className={styles['face-back__link-github']}
                  >
                    Github
                  </Anchor>
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