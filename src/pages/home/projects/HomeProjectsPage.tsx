import { ProjectWithId } from '../../../Types/Project'
import { useLoaderData } from 'react-router-dom'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import LoadingImage from '../../../component/loading/LoadingImage'
import Anchor from '../../../component/button/Anchor'
import BorderAnimation from '../../../component/animation/BorderAnimation'
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
                  classNameImg={styles['face-front__img']}
                  src={projectValue.pageImgURL} 
                  alt="imagen de la app" 
                />
              </div>

              <div className={`${styles['face']} ${styles['face-back']}`} >
                <p className={styles['face-back__project-title']} >
                  {projectValue.projectTitle}
                </p>  

                {
                  projectValue.description.trim().length > 0 &&
                  <p>
                    {projectValue.description}
                  </p> 
                }      

                  
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

                    <FontAwesomeIcon 
                      icon={faGlobe} 
                      size='lg'
                      className={styles['icon']}
                    />
                  </Anchor>

                  <Anchor
                    href={projectValue.repositoryURL} 
                    target='_blank' 
                    className={styles['face-back__link-github']}
                  >
                    Github
                    
                    <FontAwesomeIcon 
                      icon={faGithub} 
                      size='lg'
                      className={styles['icon']}
                    />
                  </Anchor> 
                </div>
                
                <BorderAnimation 
                  bottomColor='#49a69a'
                  leftColor='#49a69a'
                  rightColor='#49a69a'
                  topColor='#49a69a'
                  className={styles['projects-item__animation']}
                />   
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default HomeProjectsPage