import { ChangeEvent, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../../component/button/Button'
import styles from '../css/apiSkillInput.module.css'
import formStyles from '../../../../component/formik/formik.module.css'

interface Props {
  error: boolean
  handleBtnPlusClick: (skillName: string) => void
}

const ApiSkillInput: React.FC<Props> = (props) => {
  const [inputSkill, setInputSkill] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSkill(e.target.value)
  }

  const handleBtnPlusClick = () => {
    if (!inputSkill.trim()) return

    props.handleBtnPlusClick(inputSkill)
    setInputSkill('')
    inputRef.current?.focus()
  }

  return (
    <div className={styles['skill-input-container']} >
      <div className={`${formStyles['field']} ${styles['field-container']}`} >
        <label 
          htmlFor="skillName"
          className={
            props.error
              ? `${formStyles['field__label']} ${formStyles['field__label--error']} ${styles['label']}`
              : `${formStyles['field__label']} ${styles['label']}`
          }
        >
          Skill Name
        </label>

        <input
          id='skillName'
          type="text"
          value={inputSkill}
          onChange={(e) => handleInputChange(e)}
          className={
            props.error
              ? `${formStyles['field__input']} ${formStyles['field__input--error']} ${styles['input']}`
              : `${formStyles['field__input']} ${styles['input']}`
          }
          placeholder='javascript'
          ref={inputRef}
          autoComplete={'off'}
        />
      </div>

      <Button 
        aria-label='agregar nuevo skill'
        type='button'
        onClick={() => handleBtnPlusClick()}      
        className={
          props.error
            ? `${styles['add-btn']} ${styles['add-btn--error']}`
            : styles['add-btn']
        }      
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  )
}

export default ApiSkillInput