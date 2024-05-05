import { useField } from 'formik'
import { HTMLInputTypeAttribute } from 'react'
import Input from './Input'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: HTMLInputTypeAttribute
  name: string

  labelTitle: string
  classNameField?: string
  classNameLabel?: string
  classNameInput?: string
}

const FormikInput: React.FC<Props> = (props) => {
  const [field, meta] = useField({name: props.name, type: props.type})

  return (    
    <Input 
      error={Boolean(meta.touched && meta.error)}
      field={field}    
      {...props} 
    />    
  )
}

export default FormikInput