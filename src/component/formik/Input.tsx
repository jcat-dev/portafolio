import { FieldInputProps } from 'formik'
import { HTMLInputTypeAttribute, forwardRef } from 'react'
import styles from './formik.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: HTMLInputTypeAttribute   
  name: string

  error: boolean
  labelTitle: string
  classNameField?: string
  classNameLabel?: string
  classNameInput?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: FieldInputProps<any>
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    error,
    labelTitle,
    classNameField,
    classNameInput,
    classNameLabel,
    field,
    ...rest
  } = props

  return (
    <div className={`${styles['field']} ${classNameField ?? ''}`} >
      <label 
        htmlFor={rest.id}
        className= {
          error
            ? `${styles['field-label']} ${styles['field-label--error']} ${classNameLabel ?? ''}`
            : `${styles['field-label']} ${classNameLabel ?? ''}`
        }        
      >
        {
          labelTitle
        }
      </label>

      <input 
        className= {
          error
            ? `${styles['field-input']} ${styles['field-input--error']} ${classNameInput ?? ''}` 
            : `${styles['field-input']} ${classNameInput ?? ''}`
        }
        {...rest}        
        {...field}
        ref={ref}
      />      
    </div>
  )
})

export default Input