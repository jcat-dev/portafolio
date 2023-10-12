import { proyectList } from './projectsList'
import StackType from './StackType'
import './index.css'

const Projects = () => {
  return (
    <section 
      id='proyectos'
      className='projects-container'
    >
      <h2 className='projects-title' >
        Proyectos
      </h2>

      <ul className='projects-list' >
        {
          proyectList.map((value, index) => (
            <li
              className='projects-list__item'
              key={index}
            >
              <div className='face face-front' >
                <h3 className='face-front__title' >
                  {value.stackType.name}
                </h3>

                <img 
                  className='face-front__img'
                  src={value.pageImg} 
                  alt="page image" 
                />
              </div>

              <div className='face face-back' >
                <p className='face-back__page-name' >
                  {value.pageName}
                </p>  

                <p className='face-back__description'>
                  {value.description}
                </p>         

                <div className='face-back__stack' >
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

                <div className='face-back__link'>
                  <a 
                    className='face-back__link-url'
                    href={value.pageURL} 
                    target='_blank' 
                  >
                  Ver
                  </a>

                  <a 
                    className='face-back__link-repository'
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