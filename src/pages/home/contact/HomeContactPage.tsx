import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Form, Formik, FormikHelpers } from 'formik'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import { FormContact } from '../../../types/FormContact'
import { FetchResponse } from '../../../types/FetchResponse'
import { CREATED_STATUS } from '../../../constants/HTTP_STATUS'
import { VALIDATION_MSG } from '../../../constants/TOAST_MSG'
import * as Yup from 'yup'
import FormikInput from '../../../components/formik/FormikInput'
import FormikTextArea from '../../../components/formik/FormikTextArea'
import Button from '../../../components/button/Button'
import Anchor from '../../../components/button/Anchor'
import styles from './homeContactPage.module.css'

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
      
      <div className={styles['link']} >
        <Anchor
          href={import.meta.env.VITE_LINKEDIN_URL}
          target='_blank'
          className={styles['link-linkedin']}
        >
          <FontAwesomeIcon 
            icon={faLinkedinIn}
            className={styles['link-icon']}
            size='2xl'
          />
          
          <span className={styles['link-text']} >
            LinkedIn
          </span>
        </Anchor> 

        <Anchor 
          href={`http://wa.me/${import.meta.env.VITE_WHATSAPP}`}
          className={styles['link-wsp']}
          target="_blank" 
        >
          <FontAwesomeIcon 
            icon={faWhatsapp}
            size='2xl'
            className={styles['link-icon']}
          />

          <span className={styles['link-text']} >
            WhatsApp
          </span>
        </Anchor>

        <Anchor
          href={import.meta.env.VITE_GITHUB_URL}
          target='_blank'
          className={styles['link-github']}
        >
          <FontAwesomeIcon 
            icon={faGithub}
            className={styles['link-icon']}
            size='2xl'
          />

          <span className={styles['link-text']} >
            GitHub
          </span>   
        </Anchor> 
      </div> 
      
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
    </main>
  )
}

export default HomeContactPage