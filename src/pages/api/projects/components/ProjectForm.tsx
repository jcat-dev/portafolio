import { FieldArray, Form, Formik, FormikHelpers } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { SkillWithId } from '../../../../Types/Skill'
import { Project, ProjectWithId } from '../../../../Types/Project'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { setFetch } from '../../../../utils/fetch'
import { FetchResponse } from '../../../../Types/FetchResponse'
import * as Yup from 'yup'
import Button from '../../../../component/button/Button'
import FormikTextArea from '../../../../component/formik/FormikTextArea'
import MyTextInput from '../../../../component/formik/FormikInput'
import styles from '../css/projectForm.module.css'

interface Props {
  stacksType: SkillWithId[]
  projectWithId?: ProjectWithId
  allStacksType?: SkillWithId[]
}

const ProjectForm: React.FC<Props> = ({stacksType, projectWithId, allStacksType}) => {
  const newStacksType = projectWithId ? allStacksType : stacksType
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
      const result = await setFetch(api, method, values)

      if (result.status === 201) {
        const data: FetchResponse = await result.json()
        updateToastLoading(toastId, 'success', data.msg)
        action.resetForm()
        navigate(-1)
        return
      }      

      if (result.status === 204) {    
        updateToastLoading(toastId, 'success', result.statusText)
        navigate(-1)
        return
      }      

      return updateToastLoading(toastId, 'error', result.statusText)
    } catch (error) {
      return updateToastLoading(toastId, 'error')
    }
  }

  const handleValidForm = (dirty: boolean, isValid: boolean) => {
    //Validacion cuando el proyecto es nuevo
    if (!projectWithId && (!dirty || !isValid)) {
      getToastError('Campo requerido')
      return
    }

    if (!isValid) {
      getToastError('Campo requerido')
    }
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

  return (
    <div className={styles['container']} >
      <Link
        to={'../projects'}
        aria-label='volver a la pagina anterior'
        className={styles['back-link']}
      >
        <FontAwesomeIcon 
          size='3x'
          icon={faLeftLong} 
        />
      </Link>

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
              classNameField={styles['form-field']}
              classNameInput={styles['form-field__input']}
              classNameLabel={styles['form-field__label']}
            />            
            
            <MyTextInput
              type='text'
              id='pageURL'
              name='pageURL'
              labelTitle='Page URL'
              placeholder='https://www.ej'
              classNameField={styles['form-field']}
              classNameInput={styles['form-field__input']}
              classNameLabel={styles['form-field__label']}
            />

            <MyTextInput
              type='text'
              id='repositoryURL'
              name='repositoryURL'
              labelTitle='Repository URL'
              placeholder='https://www.ej'
              classNameField={styles['form-field']}
              classNameInput={styles['form-field__input']}
              classNameLabel={styles['form-field__label']}
            />

            <MyTextInput
              type='text'
              id='pageImgURL'
              name='pageImgURL'
              labelTitle='Image Url'
              placeholder='https://www.ej'
              classNameField={styles['form-field']}
              classNameInput={styles['form-field__input']}
              classNameLabel={styles['form-field__label']}
            />
   
            <FormikTextArea 
              name='description'
              id='description'
              labelTitle='Description'
              classNameField={styles['form-field__box']}
              classNameTextArea={styles['form-field__textarea']}
              classNameLabel={styles['form-field__label']}
            />

            <MyTextInput
              type='text'
              id='stackTitle'
              name='stackTitle'
              labelTitle='Stack Title'
              placeholder='Full Stack'
              classNameField={styles['form-field']}
              classNameInput={styles['form-field__input']}
              classNameLabel={styles['form-field__label']}
            />

            <FieldArray name='stackType' >
              {() => (
                <div className={styles['form-stacks-type']} >
                  {
                    newStacksType?.map((stackTypeValue, index) => (
                      <details
                        key={stackTypeValue._id}
                        open={true}
                        className={
                          (touched.stackType && errors.stackType)
                            ? `${styles['form-stacks-type__details']} ${styles['form-stacks-type__details--error']}`
                            : styles['form-stacks-type__details']
                        }
                      >                        
                        <summary
                          className={styles['form-stacks-type__summary']}
                        >
                          {stackTypeValue.title}
                        </summary>
                    
                        <FieldArray name={`stackType[${index}].skills`} >
                          {({push}) => (
                            <div className={styles['skills']} >
                              {                    
                                stackTypeValue.skills.map((skill, skillIndex) => (
                                  <div
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
                                  </div>
                                ))
                              }
                            </div>
                          )}
                        </FieldArray>
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
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProjectForm