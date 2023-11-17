import { useField } from 'formik'
import styles from './formik.module.css'

interface Props {
  labelTitle: string
  name: string
  type: string
  id: string
  placeholder?: string
}

const FormikInput: React.FC<Props> = ({ labelTitle, name, ...props }) => {
  const [field, meta] = useField(name)

  return (
    <div
      className={styles['form__field']}
    >
      <label 
        htmlFor={props.id}

        className= {
          (meta.touched && meta.error) 
            ? `${styles['form__label']} ${styles['form__label--error']}`
            : styles['form__label']
        }        
      >
        {labelTitle}
      </label>

      <input 
        className= {
          (meta.touched && meta.error) 
            ? `${styles['form__input']} ${styles['form__input--error']}` 
            : styles['form__input']
        } 

        {...field} 
        {...props} 
      />      
    </div>
  )
}

export default FormikInput