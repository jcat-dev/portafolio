import { useLoaderData, useNavigate } from 'react-router-dom'
import { Profile, ProfileWithId } from '../../../Types/Profile'
import { Formik, Form } from 'formik'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import { OK_STATUS } from '../../../utils/httpStatus'
import { VALIDATION_MSG } from '../../../utils/toastMsg'
import FormikInput from '../../../component/formik/FormikInput'
import FormikTextArea from '../../../component/formik/FormikTextArea'
import Button from '../../../component/button/Button'
import styles from './apiProfilePage.module.css'
import * as Yup from 'yup'

const ApiProfilePage = () => {
  const profile = useLoaderData() as ProfileWithId | null
  const navigate = useNavigate()

  const initialValues: Profile = {
    fullName: profile?.fullName ?? '',
    stackTitle: profile?.stackTitle ?? '',
    title: profile?.title ?? '',
    description: profile?.description ?? '',
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    stackTitle: Yup.string().required(),
    description: Yup.string().required(),
    title: Yup.string().required(),
  })

  const handleSubmit = async (values: Profile) => {
    const id = getToastLoading()

    try {
      const result = await setFetch(String(import.meta.env.VITE_PROFILE_API), 'PUT', values)
      const msg = await result.text()

      if (result.status === OK_STATUS) {
        updateToastLoading(id, 'success', msg)
        navigate('..')
        return
      }

      updateToastLoading(id, 'error', msg)
    } catch (error) {
      updateToastLoading(id, 'error')
    }
  }

  const handleSubmitClick = (isValid: boolean, dirty: boolean) => {
    if (isValid && dirty) return
   
    getToastError(VALIDATION_MSG)
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={(value) => handleSubmit(value)}
      validationSchema={validationSchema}
    >
      {({isValid, dirty}) => (
        <Form className={styles['form']} >       
          <FormikInput
            id='fullName'
            name='fullName'
            type='text'
            labelTitle='Full Name'
            placeholder='Full Name'
            classNameField={styles['form-field']}
            classNameLabel={styles['form-field__label']}
            classNameInput={styles['form-field__input']}
          />          

          <FormikInput
            id='title'
            name='title'
            type='text'
            labelTitle='Title'
            placeholder='Developer...'
            classNameField={styles['form-field']}
            classNameLabel={styles['form-field__label']}
            classNameInput={styles['form-field__input']}
          />

          <FormikInput
            id='stackTitle'
            name='stackTitle'
            type='text'
            labelTitle='Stack Title'
            placeholder='Full Stack...'
            classNameField={styles['form-field']}
            classNameLabel={styles['form-field__label']}
            classNameInput={styles['form-field__input']}
          />

          <FormikTextArea 
            id='description'
            name='description'
            labelTitle='Description'
            classNameField={styles['form-field']}
            classNameLabel={styles['form-field__label']}
            classNameTextArea={styles['form-field__textarea']}
          />

          <Button
            aria-label='enviar formulario'
            type='submit'
            disabled={!dirty}
            className={styles['form-field__btn']}
            onClick={() => handleSubmitClick(isValid, dirty)}
          >
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ApiProfilePage