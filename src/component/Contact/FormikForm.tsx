import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FormContact } from '../../Types/FormContact'
import * as Yup from 'yup'
import MyTextInput from './MyTextInput'
import './formikForm.css'

const FormikForm = () => {
  const initialValues: FormContact = {
    email: '',
    name: '',
    textArea: ''
  }

  const validationSchema = Yup.object<FormContact>({
    email: Yup.string().email().required('Required'),
    name: Yup.string().required('Required'),
    textArea: Yup.string().required('Required'),
  })

  const handleSubmit = (values: FormContact, action: FormikHelpers<FormContact>) => {
    console.log(values)
    console.log(action)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => handleSubmit(values, action)}
    >
      {
        (values) => (
          <Form
            className='contact-form'
          >
            <MyTextInput 
              label='Nombre *'
              id='name'
              name='name'
              placeholder=''
              type='name'
            />

            <MyTextInput 
              label='Email *'
              id='email'
              name='email'
              placeholder=''
              type='email'
            />          

            <Field 
              className={
                (values.errors.textArea && values.touched.textArea)
                  ? 'form__textarea form__textarea--error'
                  : 'form__textarea'
              }
              name="textArea"
              as="textarea"
            />
          
            <button
              className='contact-form__submit-btn'
              type='submit'
            >
              Enviar
            </button>   

            <a 
              className='contact-form__link'
              href={`http://wa.me/${import.meta.env.VITE_WHATSAPP}`}
              target="_blank" 
            >
              WhatsApp
            </a>       
          </Form>
        )
      }
    </Formik>
  )
}

export default FormikForm