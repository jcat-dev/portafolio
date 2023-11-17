import { useField } from 'formik'
import '../Contact/myTextInput.css'

interface Props {
  name: string
  labelTitle: string
  id: string
}

const FormikTextArea: React.FC<Props> = ({name, labelTitle, ...props}) => {
  const [field, meta] = useField(name)

  return (
    <div className={'form__field'} >
      <label 
        htmlFor={props.id} 
        className={
          meta.error && meta.touched 
            ? 'form__label form__label--error'
            : 'form__label'
        }
      >
        {labelTitle}
      </label>

      <textarea 
        className={
          meta.error && meta.touched
            ? 'form__textarea form__textarea--error'
            : 'form__textarea'
        }
        {...field}
        {...props}
      />
    </div>
  )
}

export default FormikTextArea