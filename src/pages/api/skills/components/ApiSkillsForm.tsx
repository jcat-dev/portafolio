import { FieldArray, Form, Formik, FormikHelpers } from 'formik'
import { Skill, SkillWithId } from '../../../../types/Skill'
import { array, object, string } from 'yup'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../../utils/fetch'
import { FetchResponse } from '../../../../types/FetchResponse'
import { useNavigate } from 'react-router-dom'
import { CREATED_STATUS, OK_STATUS } from '../../../../constants/HTTP_STATUS'
import { VALIDATION_MSG } from '../../../../constants/TOAST_MSG'
import FormikInput from '../../../../components/formik/FormikInput'
import styles from '../css/apiSkillsForm.module.css'
import Button from '../../../../components/button/Button'
import ApiSkillInput from './ApiSkillInput'
import LinkButton from '../../../../components/button/LinkButton'

interface Props {
  skill?: SkillWithId
}

const ApiSkillsForm: React.FC<Props> = ({skill}) => {  
  const navigation = useNavigate()
  const initialValues: Skill = {
    skills: skill?.skills ?? [],
    title: skill?.title ?? ''
  }
  
  const validationSchema = object({
    title: string().required(),
    skills: array(string().trim().required()).min(1).required()
  })
 
  const handleSubmit = async (values: Skill, helper: FormikHelpers<Skill>) => {
    const toastID = getToastLoading()

    try {
      const API = String(import.meta.env.VITE_SKILL_API)
      const result = await (
        skill 
          ? setFetch(`${API}/${skill._id}`, 'PUT', values)
          : setFetch(API, 'POST', values)
      )

      if (result.status === CREATED_STATUS) {
        const data: FetchResponse = await result.json()
        updateToastLoading(toastID, 'success', data.msg)
        helper.resetForm()
        navigation(-1)
        return
      }
      
      const msg = await result.text()

      if (result.status === OK_STATUS) {
        updateToastLoading(toastID, 'success', msg)
        navigation(-1)
        return
      }

      updateToastLoading(toastID, 'error', msg)
    } catch (error) {
      updateToastLoading(toastID, 'error')
    }
  }

  const handleValidateSubmit = (isValid: boolean, dirty: boolean) => {
    if (isValid && dirty) return
   
    getToastError(VALIDATION_MSG)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, helper) => handleSubmit(values, helper)}
    >
      {({values, isValid, dirty, errors}) => (
        <Form className={styles['form']} >
          <FormikInput
            id='title'
            labelTitle='Skill Title'
            name='title'
            type='text'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
            placeholder='FrontEnd'
          />

          <FieldArray name='skills' >
            {({push, remove}) => (
              <>
                <ApiSkillInput
                  onClick={push}
                  error={Boolean(errors.skills)}
                />
                  
                <ul className={styles['form__skills']} >
                  { 
                    values.skills.map((value, index) => (
                      <li
                        key={index}
                        className={styles['form__skills-item']}
                      >                      
                        <Button                           
                          aria-label='eliminar skill'
                          type='button'
                          className={styles['remove-btn']}
                          onClick={() => remove(index)}  
                        >
                          {
                            value
                          }

                          <FontAwesomeIcon 
                            icon={faCircleXmark} 
                            size='1x'
                            className={styles['remove-btn-icon']}
                          />
                        </Button>
                      </li>
                    ))               
                  }                  
                </ul>
              </>
            )}
          </FieldArray>

          <Button
            aria-label='enviar formulario'
            type='submit'
            disabled={!dirty}
            onClick={() => handleValidateSubmit(isValid, dirty)}
            className={styles['form__submit-btn']}
          >
            {
              skill ? 'Guardar' : 'Enviar'
            }
          </Button>

          <LinkButton
            to={'..'}
            relative='path'
            className={styles['form__cancel-btn']}
          >
            Cancelar
          </LinkButton>
        </Form>
      )}
    </Formik>
  )
}

export default ApiSkillsForm