import { FieldArray, Form, Formik, FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { SkillWithId } from '../../../../Types/Skill'
import { Project, ProjectWithId } from '../../../../Types/Project'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { setFetch } from '../../../../utils/fetch'
import { FetchResponse } from '../../../../Types/FetchResponse'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { CREATED_STATUS, OK_STATUS } from '../../../../utils/httpStatus'
import { VALIDATION_MSG } from '../../../../utils/toastMsg'
import * as Yup from 'yup'
import Button from '../../../../component/button/Button'
import FormikTextArea from '../../../../component/formik/FormikTextArea'
import MyTextInput from '../../../../component/formik/FormikInput'
import styles from '../css/apiProjectForm.module.css'
import LinkButton from '../../../../component/button/LinkButton'

interface Props {
  stacksType: SkillWithId[]
  projectWithId?: ProjectWithId
  allStacksType?: SkillWithId[]
}

const ApiProjectForm: React.FC<Props> = ({stacksType, projectWithId, allStacksType}) => {
  const [newStacksType, setNewStacksType] = useState<SkillWithId[]>(allStacksType ?? stacksType)
  const navigate = useNavigate()
  const clearSkills = () => {
    return stacksType.map((value) => {
      return {
        ...value,
        skills: []
      }
    })
  }

  const initialValues: Project = {
    description: projectWithId?.description ?? '',
    pageImgURL: projectWithId?.pageImgURL ?? '',
    pageURL: projectWithId?.pageURL ?? '',
    projectTitle: projectWithId?.projectTitle ?? '',
    repositoryURL: projectWithId?.repositoryURL ?? '',
    stackTitle: projectWithId?.stackTitle ?? '',
    stackType: projectWithId?.stackType ?? clearSkills()
  }  

  const validationSchema = Yup.object({
    description: Yup.string().required(),
    projectTitle: Yup.string().required(),
    stackTitle: Yup.string().required(),
    pageURL: Yup.string().url().required(),
    repositoryURL: Yup.string().url().required(),
    pageImgURL: Yup.string().url().required(),
    stackType: Yup.array()
      .required()
      .of(
        Yup.object({
          _id: Yup.string().required(),
          title: Yup.string().required(),
          skills: Yup.array().required().of(Yup.string().required())
        })          
      )
      .test('at-least-one-skill', (value) => value.some((stack) => stack.skills.length > 0))
  })

  const handleSubmit = async (values: Project, action: FormikHelpers<Project>) => {   
    const toastId = getToastLoading() 

    try {
      const API = String(import.meta.env.VITE_PROJECT_API)
      const api = projectWithId ? `${API}/${projectWithId._id}` : API 
      const method = projectWithId ? 'PUT' : 'POST' 
      const result = await setFetch(api, method, {
        ...values,
        stackType: values.stackType.filter((value) => value.skills.length !== 0)
      })

      if (result.status === CREATED_STATUS) {
        const data: FetchResponse = await result.json()
        updateToastLoading(toastId, 'success', data.msg)
        action.resetForm()
        navigate(-1)
        return
      }      

      const msg = await result.text()

      if (result.status === OK_STATUS) {    
        updateToastLoading(toastId, 'success', msg)
        navigate(-1)
        return
      }      

      return updateToastLoading(toastId, 'error', msg)
    } catch (error) {
      return updateToastLoading(toastId, 'error')
    }
  }

  const handleValidForm = (dirty: boolean, isValid: boolean) => {
    if (isValid && dirty) return
   
    getToastError(VALIDATION_MSG)
  }

  const handleRemoveSkill = (skill: string, stackTypeId: string, projectValue: Project, cb: (values: Project) => void) => {
    const removeSkill = projectValue.stackType.map((value) => {
      if (value._id === stackTypeId) {       
        return {
          ...value,
          skills: value.skills.filter((value) => value !== skill)
        }
      }

      return value
    })    

    cb({
      ...projectValue,
      stackType: removeSkill
    })
  }

  const handleDeleteOldStackType = (id: string, project: Project, cb: (value: Project) => void) => {
    cb({
      ...project,
      stackType: project.stackType.filter((value) => value._id !== id)
    })

    setNewStacksType(newStacksType.filter((value) => value._id !== id))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(value, action) => handleSubmit(value, action)}
      enableReinitialize={true}
    >
      {({touched, dirty, isValid, values, setValues, errors}) => (
        <Form className={styles['form']} >           
          <MyTextInput
            type='text'
            id='projectTitle'
            name='projectTitle'
            labelTitle='Project Title'
            placeholder='My project'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
          />            
            
          <MyTextInput
            type='text'
            id='pageURL'
            name='pageURL'
            labelTitle='Page URL'
            placeholder='https://www.ej'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
          />

          <MyTextInput
            type='text'
            id='repositoryURL'
            name='repositoryURL'
            labelTitle='Repository URL'
            placeholder='https://www.ej'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
          />

          <MyTextInput
            type='text'
            id='pageImgURL'
            name='pageImgURL'
            labelTitle='Image Url'
            placeholder='https://www.ej'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
          />
   
          <FormikTextArea 
            name='description'
            id='description'
            labelTitle='Description'
            classNameField={styles['form__field-box']}
            classNameTextArea={styles['form__field-textarea']}
            classNameLabel={styles['form__field-label']}
          />

          <MyTextInput
            type='text'
            id='stackTitle'
            name='stackTitle'
            labelTitle='Stack Title'
            placeholder='Full Stack'
            classNameField={styles['form__field']}
            classNameInput={styles['form__field-input']}
            classNameLabel={styles['form__field-label']}
          />
          
          <FieldArray name='stackType' >
            {() => (
              <div className={styles['form-stacks']} >
                {
                  newStacksType?.map((stackTypeValue, index) => (
                    <details
                      key={stackTypeValue._id}
                      open={true}
                      className={
                        (touched.stackType && errors.stackType)
                          ? `${styles['form-stacks__details']} ${styles['form-stacks__details--error']}`
                          : styles['form-stacks__details']
                      }
                    >                        
                      <summary
                        className={styles['form-stacks__details-summary']}
                      >
                        {stackTypeValue.title}
                      </summary>
                    
                      <FieldArray name={`stackType[${index}].skills`} >
                        {({push}) => (
                          <ul className={styles['skills']} >
                            {                    
                              stackTypeValue.skills.map((skill, skillIndex) => (
                                <li
                                  key={skillIndex}
                                  className={
                                    values.stackType[index].skills.includes(skill)
                                      ? `${styles['skills-item']} ${styles['skills-item--active']}`
                                      : styles['skills-item']
                                  }
                                  onClick={ 
                                    values.stackType[index].skills.includes(skill)
                                      ? () => handleRemoveSkill(skill, stackTypeValue._id, values, setValues)
                                      : () => push(skill)
                                  }                                  
                                >
                                  {skill}
                                </li>
                              ))
                            }
                          </ul>
                        )}
                      </FieldArray>

                      <Button
                        aria-label='Eliminar Stack'
                        type='button'    
                        hidden={Boolean(stacksType.find((values) => values._id === stackTypeValue._id))}      
                        className={styles['form-stacks__details-delete']}
                        onClick={() => handleDeleteOldStackType(stackTypeValue._id, values, setValues)}        
                        title={'Delete Old Stack'}                          
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </Button>
                    </details>
                  ))
                }
              </div>
            )}
          </FieldArray>

          <Button
            aria-label='enviar formulario'
            type='submit'
            className={styles['form-btn']}
            onClick={() => handleValidForm(dirty, isValid)}
            disabled={!dirty}
          >
            {
              projectWithId ? 'Guardar' : 'Enviar'
            }
          </Button>

          <LinkButton 
            to={'..'}
            aria-label='volver a la pagina anterior'  
            className={styles['form__btn-cancel']}
            relative='path'
          >
              Cancelar
          </LinkButton>
        </Form>
      )}
    </Formik>
  )
}

export default ApiProjectForm