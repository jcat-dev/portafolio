import { useField } from 'formik'
import './myTextInput.css'

interface Props {
  label: string
  name: string
  type: string
  placeholder: string
  id: string
}

const MyTextInput: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div
      className='form__field'
    >
      <input 
        className= {
          (meta.touched && meta.error) 
            ? 'form__input form__input--error'
            : 'form__input'
        } 

        {...field} 
        {...props} 
      />

      <label 
        htmlFor={props.id}

        className= {
          (meta.touched && meta.error) 
            ? 'form__label form__label--error form__label--active'
            : field.value
              ? 'form__label form__label--active' 
              : 'form__label'  
        }        
      >
        {label}
      </label>
    </div>
  )
}

export default MyTextInput