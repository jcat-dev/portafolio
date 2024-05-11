import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillWithId } from '../../Types/Skill'
import { icons } from '../../utils/Icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import BorderAnimation from '../animation/BorderAnimation'
import StackTypeButtons from './StackTypeButtons'
import styles from './stacksTypeCard.module.css'

interface Props {
  stackType: SkillWithId[]
  devMode: boolean
  onDelete?: (id: string) => void
}

const StacksTypeCard: React.FC<Props> = ({stackType, devMode, onDelete}) => {
  return (
    <ul className={styles['stacks']} > 
      {
        stackType.map((value) => (
          <li
            key={value._id}
            className={styles['stacks-item']}
          >
            <h2 className={styles['stacks-item__title']} >                
              <FontAwesomeIcon 
                size='2xl'
                icon={
                  icons.find((iconValue) => iconValue.title === value.title)?.icon 
                  ?? faLaptopCode
                }
              />
                               
              {value.title}
            </h2>

            <ul className={styles['stacks-item__skills']} >
              {
                value.skills.map((value, index) => (
                  <li 
                    key={index}
                    className={styles['stacks-item__skills-item']}
                  >
                    {value}
                  </li>
                ))
              }
            </ul>

            {
              devMode && onDelete && <StackTypeButtons 
                id={value._id} 
                onDelete={onDelete} 
              />
            }
              
            <BorderAnimation 
              className={styles['stacks-item__animation']}
              topColor={'#49a69a'} 
              rightColor={'#49a69a'} 
              bottomColor={'#49a69a'} 
              leftColor={'#49a69a'} 
            />
          </li>
        ))
      }        
    </ul>   
  )
} 

export default StacksTypeCard