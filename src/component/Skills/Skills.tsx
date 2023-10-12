import { useSlider } from '../../hooks/useSlider'
import skillsList from './skillsList'
import Card from './Card'
import iconNext from '../../assets/icon-next.svg'
import iconPrev from '../../assets/icon-previous.svg'
import './index.css'

const Skills = () => {  
  const {
    newList,
    getDecrease,
    getIncrease
  } = useSlider(skillsList)
  return (
    <section 
      id='habilidades' 
      className='skills' 
    >
      <h2 className='skills-title' >Habilidades</h2>
      
      <div className='carrusel-container' >
        <div className='carrusel' >
          <button
            className='carrusel__btn-prev'
            onClick={getDecrease}
          >
            <img 
              src={iconPrev} 
              alt="icon prev" 
            />
          </button>

          <button 
            className='carrusel__btn-next'
            onClick={getIncrease}
          >
            <img 
              src={iconNext} 
              alt="icon next" 
            />
          </button>
        
          {
            newList.map((value, index) => {
              if (index > 2) return 

              return (
                <Card
                  title={value.title}
                  skillsList={value.data}
                  index={index}               
                  key={value.id}   
                />
              )
            })
          }           
        </div>      
      </div>
    </section>
  )
}

export default Skills