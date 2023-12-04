import { useField } from 'formik'
import styles from './formik.module.css'

interface Props {
  name: string
  labelTitle: string
  id: string

  className?: string
}

const FormikTextArea: React.FC<Props> = ({name, labelTitle, className, ...props}) => {
  const [field, meta] = useField(name)

  return (
    <div className={`${styles['form__field']} ${className ?? ''}`} >
      <label 
        htmlFor={props.id} 
        className={
          (meta.error && meta.touched)
            ? `${styles['form__label']} ${styles['form__label--error']}`
            : styles['form__label']
        }
      >
        {labelTitle}
      </label>

      <textarea 
        className={
          (meta.error && meta.touched)
            ? `${styles['form__textarea']} ${styles['form__textarea--error']}`
            : styles['form__textarea']
        }
        {...field}
        {...props}
      />
    </div>
  )
}

export default FormikTextArea