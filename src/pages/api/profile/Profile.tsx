import { useLoaderData } from 'react-router-dom'
import { Profile as ProfileD, ProfileWithId } from '../../../Types/Profile'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import FormikInput from '../../../component/formik/FormikInput'
import FormikTextArea from '../../../component/formik/FormikTextArea'
import Button from '../../../component/button/Button'
import styles from './profile.module.css'

const Profile = () => {
  const profiles = useLoaderData() as ProfileWithId[]

  const initialValues: ProfileD = {
    fullName: profiles[0]?.fullName ?? '',
    stackTitle: profiles[0]?.stackTitle ?? '',
    photoUrl: profiles[0]?.photoUrl ?? '',
    description: profiles[0]?.description ?? '',
  }

  const validationSchema = object({
    fullName: string().required(),
    stackTitle: string().required(),
    description: string().required(),
    photoUrl: string().url().required(),
  })

  const handleSubmit = async (values: ProfileD) => {
    const id = getToastLoading()

    try {
      const result = await setFetch(
        String(import.meta.env.VITE_PROFILE_API),
        'POST',
        values
      )

      if (result.status === 204) return updateToastLoading(id, 'success')
      throw new Error
    } catch (error) {
      updateToastLoading(id, 'error')
    }
  }

  const handleSubmitClick = (isValid: boolean, dirty: boolean) => {
    if (!isValid || !dirty) {
      return getToastError('Field required.')
    }
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
            id='stackTitle'
            name='stackTitle'
            type='text'
            labelTitle='Stack Title'
            placeholder='Full Stack...'
            classNameField={styles['form-field']}
            classNameLabel={styles['form-field__label']}
            classNameInput={styles['form-field__input']}
          />

          <FormikInput
            id='photoUrl'
            name='photoUrl'
            type='url'
            labelTitle='Photo Url'
            placeholder='https://...com'
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
            className={
              (!isValid)
                ? `${styles['form-field__btn']} ${styles['form-field__btn--error']}`
                : styles['form-field__btn'] 
            }
            onClick={() => handleSubmitClick(isValid, dirty)}
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default Profile