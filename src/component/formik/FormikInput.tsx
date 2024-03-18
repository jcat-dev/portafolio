import { useField } from 'formik'
import styles from './formik.module.css'

interface Props {
  type: string
  id: string
  placeholder?: string

  name: string
  labelTitle: string
  classNameField?: string
  classNameLabel?: string
  classNameInput?: string
}

const FormikInput: React.FC<Props> = ({ name, labelTitle, classNameField, classNameInput, classNameLabel, ...props }) => {
  const [field, meta] = useField(name)

  return (
    <div className={`${styles['field']} ${classNameField ?? ''}`} >
      <label 
        htmlFor={props.id}

        className= {
          (meta.touched && meta.error) 
            ? `${styles['field__label']} ${styles['field__label--error']} ${classNameLabel ?? ''}`
            : `${styles['field__label']} ${classNameLabel ?? ''}`
        }        
      >
        {labelTitle}
      </label>

      <input 
        className= {
          (meta.touched && meta.error) 
            ? `${styles['field__input']} ${styles['field__input--error']} ${classNameInput ?? ''}` 
            : `${styles['field__input']} ${classNameInput ?? ''}`
        } 

        {...field} 
        {...props} 
      />      
    </div>
  )
}

export default FormikInput