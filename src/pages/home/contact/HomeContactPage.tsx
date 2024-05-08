import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Form, Formik, FormikHelpers } from 'formik'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import { FormContact } from '../../../Types/FormContact'
import { FetchResponse } from '../../../Types/FetchResponse'
import { CREATED_STATUS } from '../../../utils/httpStatus'
import { VALIDATION_MSG } from '../../../utils/toastMsg'
import FormikInput from '../../../component/formik/FormikInput'
import FormikTextArea from '../../../component/formik/FormikTextArea'
import Button from '../../../component/button/Button'
import styles from './homeContactPage.module.css'
import * as Yup from 'yup'
import Anchor from '../../../component/button/Anchor'

const HomeContactPage = () => { 
  const initialValues: FormContact = {
    email: '',
    name: '',
    text: ''
  }

  const validationSchema = Yup.object<FormContact>({
    email: Yup.string().email().trim().required('Required'),
    name: Yup.string().trim().required('Required'),
    text: Yup.string().required('Required'),
  })

  const handleSubmit = async (values: FormContact, action: FormikHelpers<FormContact>) => {
    const toastId = getToastLoading() 

    try {
      const result = await setFetch(String(import.meta.env.VITE_EMAIL_API), 'POST', values)

      if (result.status === CREATED_STATUS) {          
        const data: FetchResponse = await result.json()
        updateToastLoading(toastId, 'success', data.msg)
        action.resetForm()
        return
      } 
      
      updateToastLoading(toastId, 'error', await result.text())
    } catch (error) {
      updateToastLoading(toastId, 'error')
    } 
  }

  const handleValidateClick = (isValid: boolean, dirty: boolean) => {
    if (isValid && dirty) return
   
    getToastError(VALIDATION_MSG)     
  }

  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        CONTACTO
      </h1>   

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, action) => handleSubmit(values, action)}
      >
        {
          ({isValid, dirty}) => (
            <Form className={styles['form']} >
              <FormikInput 
                id='name'
                name='name'
                type='name'
                labelTitle='Nombre'
                classNameField={styles['form__field']}
                classNameInput={styles['form__field-input']}
                classNameLabel={styles['form__field-label']}
              />

              <FormikInput 
                id='email'
                name='email'
                type='email'
                labelTitle='Email'
                classNameField={styles['form__field']}
                classNameInput={styles['form__field-input']}
                classNameLabel={styles['form__field-label']}
              />          

              <FormikTextArea
                id='text'
                name='text'
                labelTitle='Mensaje'
                classNameField={styles['form__field']}
                classNameTextArea={styles['form__field-textarea']}
                classNameLabel={styles['form__field-label']}
              />
          
              <Button 
                aria-label='Enviar formulario'
                className={styles['form__submit-btn']}
                type='submit'
                onClick={() => handleValidateClick(isValid, dirty)}
              >
                  Enviar Mensaje
              </Button>                 
            </Form>
          )
        }
      </Formik>

      <Anchor 
        href={`http://wa.me/${import.meta.env.VITE_WHATSAPP}`}
        className={styles['wsp-btn']}
        target="_blank" 
      >
        Enviar WhatsApp
        <FontAwesomeIcon 
          icon={faWhatsapp}
          size='xl'
          className={styles['wsp-btn-icon']}
        />
      </Anchor>        
    </main>
  )
}

export default HomeContactPage