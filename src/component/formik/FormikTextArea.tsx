import { useField } from 'formik'
import styles from './formik.module.css'

interface Props {
  id: string
  labelTitle: string

  name: string
  classNameField?: string
  classNameLabel?: string
  classNameTextArea?: string
}

const FormikTextArea: React.FC<Props> = ({name, classNameField, classNameLabel, classNameTextArea, ...props}) => {
  const [field, meta] = useField(name)

  return (
    <div className={`${styles['form__field']} ${classNameField ?? ''}`} >
      <label 
        htmlFor={props.id} 
        className={
          (meta.error && meta.touched)
            ? `${styles['form__label']} ${styles['form__label--error']} ${classNameLabel ?? ''}`
            : `${styles['form__label']} ${classNameLabel ?? ''}`
        }
      >
        {props.labelTitle}
      </label>

      <textarea 
        id={props.id}
        className={
          (meta.error && meta.touched)
            ? `${styles['form__textarea']} ${styles['form__textarea--error']} ${classNameTextArea ?? ''}`
            : `${styles['form__textarea']} ${classNameTextArea ?? ''}`
        }
        {...field}
      />
    </div>
  )
}

export default FormikTextArea