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
    <div className={`${styles['field']} ${classNameField ?? ''}`} >
      <label 
        htmlFor={props.id} 
        className={
          (meta.error && meta.touched)
            ? `${styles['field__label']} ${styles['field__label--error']} ${classNameLabel ?? ''}`
            : `${styles['field__label']} ${classNameLabel ?? ''}`
        }
      >
        {props.labelTitle}
      </label>

      <textarea 
        id={props.id}
        className={
          (meta.error && meta.touched)
            ? `${styles['field__textarea']} ${styles['field__textarea--error']} ${classNameTextArea ?? ''}`
            : `${styles['field__textarea']} ${classNameTextArea ?? ''}`
        }
        {...field}
      />
    </div>
  )
}

export default FormikTextArea