import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Form, Formik, FormikHelpers } from 'formik'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { setFetch } from '../../../../utils/fetch'
import { FormContact } from '../../../../Types/FormContact'
import LoadingImage from '../../../../component/loading/LoadingImage'
import FormikInput from '../../../../component/formik/FormikInput'
import FormikTextArea from '../../../../component/formik/FormikTextArea'
import Button from '../../../../component/button/Button'
import styles from './contact.module.css'
import * as Yup from 'yup'

const Contact = () => { 
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
        updateToastLoading(toastId, 'success')
        return action.resetForm()
      } 

      throw Error
    } catch (error) {
      updateToastLoading(toastId, 'error')
    } 
  }

  const handleRequired = (values: FormContact) => {
    if (!values.email || !values.name || !values.text) {
      getToastError('Campo requerido')
    }       
  }

  return (
    <section 
      id="contacto" 
      className={styles['container']}
    >
      <h2 className={styles['title']} >
        Contacto
      </h2>   

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
            ({isValid, values}) => (
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
                  classNameLabel={styles['contact-form__field-label']}
                />

                <FormikInput 
                  id='email'
                  name='email'
                  type='email'
                  labelTitle='Email'
                  classNameField={styles['contact-form__field']}
                  classNameInput={styles['contact-form__field-input']}
                  classNameLabel={styles['contact-form__field-label']}
                />          

                <FormikTextArea
                  id='text'
                  name='text'
                  labelTitle='Mensaje'
                  classNameField={styles['contact-form__field']}
                  classNameTextArea={styles['contact-form__field-textarea']}
                  classNameLabel={styles['contact-form__field-label']}
                />
          
                <Button 
                  aria-label='Enviar formulario'
                  className={
                    isValid
                      ? styles['contact-form__submit-btn']
                      : `${styles['contact-form__submit-btn']} ${styles['contact-form__submit-btn--error']}`
                  }
                  type='submit'
                  onClick={() => handleRequired(values)}
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
    </section>
  )
}

export default Contact