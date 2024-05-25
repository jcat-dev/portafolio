import { ProjectWithId } from '../../../Types/Project'
import { useLoaderData } from 'react-router-dom'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { getTechnologySvgUrl } from '../../../utils/technologySVG'
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
                    projectValue.stackType.flatMap((flatValue) => flatValue.skills).map((mapValue, mapIndex) => (
                      <li
                        key={mapIndex}
                        className={styles['face-back__stacks-item']}
                      >
                        <img
                          src={getTechnologySvgUrl(mapValue) ?? ''}
                          className={styles['item-svg']}
                          loading='lazy'
                        />

                        <span className={styles['item-title']} >
                          {
                            mapValue
                          }
                        </span>
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
                    GitHub
                    
                    <FontAwesomeIcon 
                      icon={faGithub} 
                      size='lg'
                      className={styles['icon']}
                    />
                  </Anchor> 
                </div>
                
                <BorderAnimation 
                  bottomColor='#015fa3'
                  leftColor='#015fa3'
                  rightColor='#015fa3'
                  topColor='#015fa3'
                  className={styles['face-back__animation']}
                />   
              </div>

              <BorderAnimation 
                bottomColor='#015fa3'
                leftColor='#015fa3'
                rightColor='#015fa3'
                topColor='#015fa3'
                className={styles['projects-item__animation']}
              />   
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default HomeProjectsPage