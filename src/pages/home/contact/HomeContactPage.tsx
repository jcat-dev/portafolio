import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Form, Formik, FormikHelpers } from 'formik'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import { FormContact } from '../../../Types/FormContact'
import { FetchResponse } from '../../../Types/FetchResponse'
import { CREATED_STATUS } from '../../../utils/httpStatus'
import { VALIDATION_MSG } from '../../../utils/toastMsg'
import LoadingImage from '../../../component/loading/LoadingImage'
import FormikInput from '../../../component/formik/FormikInput'
import FormikTextArea from '../../../component/formik/FormikTextArea'
import Button from '../../../component/button/Button'
import styles from './homeContactPage.module.css'
import * as Yup from 'yup'

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

  const handleRequired = (isValid: boolean, dirty: boolean) => {
    if (isValid && dirty) return
   
    getToastError(VALIDATION_MSG)     
  }

  return (
    <main className={styles['container']} >
      <h1 className={styles['title']} >
        Contact
      </h1>   

      <div className={styles['contact']} >
        <LoadingImage
          alt="contact image" 
          src={String(import.meta.env.VITE_CONTACT_IMG)} 
          classNameContainer={styles['contact-box']}
          classNameImg={styles['contact-box__img']}
        />    

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, action) => handleSubmit(values, action)}
        >
          {
            ({isValid, dirty, errors, touched}) => (
              <Form className={
                isValid
                  ? styles['contact-form']
                  : `${styles['contact-form']} ${styles['contact-form--error']}`
              }>
                <FormikInput 
                  id='name'
                  name='name'
                  type='name'
                  labelTitle='Nombre'
                  classNameField={styles['contact-form__field']}
                  classNameInput={styles['contact-form__field-input']}
                  classNameLabel={
                    errors.name && touched.name
                      ? `${styles['contact-form__field-label']} ${styles['contact-form__field-label--error']}`
                      : styles['contact-form__field-label']
                  }
                />

                <FormikInput 
                  id='email'
                  name='email'
                  type='email'
                  labelTitle='Email'
                  classNameField={styles['contact-form__field']}
                  classNameInput={styles['contact-form__field-input']}
                  classNameLabel={
                    errors.email && touched.email
                      ? `${styles['contact-form__field-label']} ${styles['contact-form__field-label--error']}`
                      : styles['contact-form__field-label']
                  }
                />          

                <FormikTextArea
                  id='text'
                  name='text'
                  labelTitle='Mensaje'
                  classNameField={styles['contact-form__field']}
                  classNameTextArea={styles['contact-form__field-textarea']}
                  classNameLabel={
                    errors.text && touched.text
                      ? `${styles['contact-form__field-label']} ${styles['contact-form__field-label--error']}`
                      : styles['contact-form__field-label']
                  }
                />
          
                <Button 
                  aria-label='Enviar formulario'
                  className={
                    isValid
                      ? styles['contact-form__submit-btn']
                      : `${styles['contact-form__submit-btn']} ${styles['contact-form__submit-btn--error']}`
                  }
                  type='submit'
                  onClick={() => handleRequired(isValid, dirty)}
                >
                  Enviar
                </Button>                 
              </Form>
            )
          }
        </Formik>
      </div>

      <a 
        className={styles['contact-link']}
        href={`http://wa.me/${import.meta.env.VITE_WHATSAPP}`}
        target="_blank" 
      >
        <FontAwesomeIcon 
          icon={faWhatsapp}
          size='3x'
        />
      </a>        
    </main>
  )
}

export default HomeContactPage