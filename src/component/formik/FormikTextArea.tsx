import { useField } from 'formik'
import styles from './formik.module.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string

  labelTitle: string
  classNameField?: string
  classNameLabel?: string
  classNameTextArea?: string
}

const FormikTextArea: React.FC<Props> = (props) => {
  const {
    name,
    labelTitle,
    classNameField,
    classNameLabel,
    classNameTextArea,
    ...rest
  } = props
  const [field, meta] = useField(name)

  return (
    <div className={`${styles['field']} ${classNameField ?? ''}`} >
      <label 
        htmlFor={rest.id} 
        className={
          (meta.error && meta.touched)
            ? `${styles['field-label']} ${styles['field-label--error']} ${classNameLabel ?? ''}`
            : `${styles['field-label']} ${classNameLabel ?? ''}`
        }
      >
        {
          labelTitle
        }
      </label>

      <textarea
        className={
          (meta.error && meta.touched)
            ? `${styles['field-textarea']} ${styles['field-textarea--error']} ${classNameTextArea ?? ''}`
            : `${styles['field-textarea']} ${classNameTextArea ?? ''}`
        }
        {...rest}    
        {...field}    
      />
    </div>
  )
}

export default FormikTextArea