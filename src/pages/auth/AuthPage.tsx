import { Form, Formik, FormikHelpers } from 'formik'
import { setFetch } from '../../utils/fetch'
import { getToastLoading, updateToastLoading } from '../../utils/toast'
import { FetchResponseWithData } from '../../types/FetchResponse'
import { CredentialAuth } from '../../types/CredentialAuth'
import { CREATED_STATUS } from '../../constants/HTTP_STATUS'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import FormikInput from '../../component/formik/FormikInput'
import Button from '../../component/button/Button'
import styles from './authPage.module.css'

interface FormValues {
  credential: string
}

const AuthPage = () => {
  const navigate = useNavigate()
  const initialValues: FormValues = {
    credential: ''
  }

  const validationSchema = Yup.object({
    credential: Yup.string().trim().strict().required()
  })

  const handleSubmit = async (values: FormValues, helper: FormikHelpers<FormValues>) => {
    const toastId = getToastLoading()

    try {
      const result = await setFetch(String(import.meta.env.VITE_AUTH_API), 'POST', values)
      
      if (result.status === CREATED_STATUS) {
        const data: FetchResponseWithData<CredentialAuth> = await result.json()
        sessionStorage.setItem('token', data.data.token)
        updateToastLoading(toastId, 'success', data.msg)
        helper.resetForm()
        navigate('/')
        return
      }

      updateToastLoading(toastId, 'error', await result.text())
    } catch (error) {
      updateToastLoading(toastId, 'error')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, helper) => handleSubmit(values, helper)}
      validationSchema={validationSchema}
    >
      {
        ({ errors }) => (
          <Form className={styles['form']} >
            <FormikInput 
              id='credentialId'
              labelTitle='Credential'
              name='credential'
              type='password'
              classNameField={styles['form-field']}
            />
            <p className={styles['field-error']}>
              {errors.credential}
            </p>

            <Button 
              aria-label='enviar formulario'
              className={styles['btn-submit']}
              type='submit'
            >
                Enviar
            </Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default AuthPage