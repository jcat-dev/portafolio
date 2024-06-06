import { ChangeEvent, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../../components/button/Button'
import styles from '../css/apiSkillInput.module.css'
import Input from '../../../../components/formik/Input'

interface Props {
  error: boolean
  onClick: (skillName: string) => void
}

const ApiSkillInput: React.FC<Props> = (props) => {
  const [inputSkill, setInputSkill] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSkill(e.target.value)
  }

  const handlePlusBtnClick = () => {
    if (!inputSkill.trim()) return

    props.onClick(inputSkill)
    setInputSkill('')
    inputRef.current?.focus()
  }

  return (
    <div className={styles['skill-input']} >
      <Input
        error={props.error}
        id='skillName'
        name='skillName'
        labelTitle='Skill Name'
        type='text'
        classNameField={styles['field']}
        classNameInput={styles['input']}
        classNameLabel={styles['label']}
        placeholder='javascript'
        ref={inputRef}
        value={inputSkill}
        onChange={(e) => handleInputChange(e)}
        autoComplete={'off'}
      />

      <Button 
        aria-label='agregar nuevo skill'
        type='button'
        onClick={() => handlePlusBtnClick()}
        className={
          props.error
            ? `${styles['skill-input__plus-btn']} ${styles['skill-input__plus-btn--error']}`
            : styles['skill-input__plus-btn']
        }      
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  )
}

export default ApiSkillInput