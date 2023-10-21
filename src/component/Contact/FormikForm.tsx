import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FormContact } from '../../Types/FormContact'
import { getToastError, getToastLoading, updateLoading } from '../../utils/toast'
import { setFetch } from '../../utils/fetch'
import * as Yup from 'yup'
import MyTextInput from './MyTextInput'
import './formikForm.css'

const FormikForm = () => {
  const initialValues: FormContact = {
    email: '',
    name: '',
    text: ''
  }

  const validationSchema = Yup.object<FormContact>({
    email: Yup.string().email().required('Required'),
    name: Yup.string().required('Required'),
    text: Yup.string().required('Required'),
  })

  const handleSubmit = async (values: FormContact, action: FormikHelpers<FormContact>) => {
    const toastId = getToastLoading() 

    try {
      const result = await setFetch(String(import.meta.env.VITE_EMAIL_API), 'POST', values)
      
      if (result.status === 204) {          
        updateLoading(toastId, 'success')
        action.resetForm()
      } 
    } catch (error) {
      updateLoading(toastId, 'error')
    } 
  }

  const handleRequired = (values: FormContact) => {
    if (!values.email || !values.name || !values.text) {
      getToastError('Campo requerido')
    }       
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => handleSubmit(values, action)}
    >
      {
        ({errors, touched, values}) => (
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
                (errors.text && touched.text)
                  ? 'form__textarea form__textarea--error'
                  : 'form__textarea'
              }
              name="text"
              as="textarea"
            />
          
            <button
              className='contact-form__submit-btn'
              type='submit'
              onClick={() => handleRequired(values)}
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