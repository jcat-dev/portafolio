import { FieldArray, Form, Formik, FormikHelpers } from 'formik'
import { Skill, SkillWithId } from '../../../../Types/Skill'
import { array, object, string } from 'yup'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../../utils/fetch'
import { FetchMethod, FetchResponse } from '../../../../Types/FetchResponse'
import { useNavigate } from 'react-router-dom'
import FormikInput from '../../../../component/formik/FormikInput'
import styles from '../css/apiSkillsForm.module.css'
import Button from '../../../../component/button/Button'
import ApiSkillInput from './ApiSkillInput'
import LinkButton from '../../../../component/button/LinkButton'

interface Props {
  isNew: boolean
  data?: SkillWithId
}

const ApiSkillsForm: React.FC<Props> = ({isNew, data}) => {  
  const navigation = useNavigate()
  const initialValues: Skill = {
    skills: data?.skills ?? [],
    title: data?.title ?? ''
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
        isNew 
          ? setFetchSkills(API, 'POST', values)
          : setFetchSkills(`${API}/${data?._id}`, 'PUT', values)
      )

      if (result.status === 201) {
        const data: FetchResponse = await result.json()

        updateToastLoading(toastID, 'success', data.msg)
        helper.resetForm()
        navigation(-1)
        return
      }
      
      if (result.status === 204) {
        updateToastLoading(toastID, 'success', result.statusText)
        navigation(-1)
        return
      }

      updateToastLoading(toastID, 'error', result.statusText)
    } catch (error) {
      updateToastLoading(toastID, 'error')
    }
  }

  const setFetchSkills = (API: string, method: FetchMethod, formValue: Skill) => {
    return setFetch(API, method, formValue)
  }

  const handleValidateSubmit = (isValid: boolean, dirty: boolean) => {
    if (!isValid || !dirty) {
      return getToastError('Field required') 
    }
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
            classNameField={styles['form-field']}
            classNameInput={styles['form-field__input']}
            classNameLabel={styles['form-field__label']}
            placeholder='FrontEnd'
          />

          <FieldArray name='skills' >
            {(arrayHelpers) => (
              <>
                <ApiSkillInput
                  handleBtnPlusClick={arrayHelpers.push}
                  error={Boolean(errors.skills)}
                />
                  
                <ul className={styles['form-skills']} >
                  { 
                    values.skills.map((value, index) => (
                      <li
                        key={index}
                        className={styles['form-skills__item']}
                      >                      
                        <Button                           
                          aria-label='eliminar skill'
                          type='button'
                          className={styles['form-skills__item-btn']}
                          onClick={() => arrayHelpers.remove(index)}  
                        >
                          {value}

                          <FontAwesomeIcon 
                            icon={faCircleXmark} 
                            size='1x'
                            className={styles['form-skills__item-icon']}
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
              isNew ? 'Enviar' : 'Guardar'
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