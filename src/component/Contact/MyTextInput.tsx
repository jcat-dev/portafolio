import { useField } from 'formik'
import './myTextInput.css'

interface Props {
  labelTitle: string
  name: string
  type: string
  id: string
  placeholder?: string
}

const MyTextInput: React.FC<Props> = ({ labelTitle, name, ...props }) => {
  const [field, meta] = useField(name)

  return (
    <div
      className='form__field'
    >
      <label 
        htmlFor={props.id}

        className= {
          (meta.touched && meta.error) 
            ? 'form__label form__label--error'
            : 'form__label' 
        }        
      >
        {labelTitle}
      </label>

      <input 
        className= {
          (meta.touched && meta.error) 
            ? 'form__input form__input--error'
            : 'form__input'
        } 

        {...field} 
        {...props} 
      />      
    </div>
  )
}

export default MyTextInput