import { Form, Formik, FormikHelpers } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { SkillWithId } from '../../../../Types/Skill'
import { Project, ProjectWithId, StackType } from '../../../../Types/Project'
import { getToastError, getToastLoading, updateToastLoading } from '../../../../utils/toast'
import { setFetch } from '../../../../utils/fetch'
import { FetchResponse } from '../../../../Types/FetchResponse'
import { array, object, string } from 'yup'
import Button from '../../../../component/button/Button'
import FormikTextArea from '../../../../component/formik/FormikTextArea'
import MyTextInput from '../../../../component/formik/FormikInput'
import styles from '../css/projectForm.module.css'

interface Props {
  isNewForm: boolean
  projectValues?: ProjectWithId
  selectedSkills: string[]
  selectedStackType: StackType[]
  skills: SkillWithId[]
}

const ProjectForm: React.FC<Props> = ({projectValues, ...props}) => {
  const [selectedStackType, setSelectedStackType] = useState<StackType[]>(props.selectedStackType)
  const [selectedSkills, setSelectedSkills] = useState<string[]>(props.selectedSkills)
  const navigate = useNavigate()

  const initialValues: Project = {
    description: projectValues?.description ?? '',
    pageImgURL: projectValues?.pageImgURL ?? '',
    pageURL: projectValues?.pageURL ?? '',
    projectTitle: projectValues?.projectTitle ?? '',
    repositoryURL: projectValues?.repositoryURL ?? '',
    stackTitle: projectValues?.stackTitle ?? '',
    stackType: []
  }

  const validationSchema = object({
    description: string().required(),
    projectTitle: string().required(),
    stackTitle: string().required(),
    stackType: array(string().required()).required(),
    pageURL: string().url().required(),
    repositoryURL: string().url().required(),
    pageImgURL: string().url().required(),
  })

  const handleSubmit = async (values: Project, action: FormikHelpers<Project>) => {   
    const stackType = selectedStackType.filter((value) => value.skills.length > 0)

    if (stackType.length === 0) {
      getToastError('Campo requerido')
      return 
    }

    const toastId = getToastLoading() 
    try {
      const API = String(import.meta.env.VITE_PROJECT_API)
      const api = props.isNewForm ? API : `${API}/${projectValues?._id}`
      const method = props.isNewForm ? 'POST' : 'PUT'
      const body =  {...values, stackType: [...stackType]}
      const result = await setFetch(api, method, body)

      if (result.status === 201) {
        const data: FetchResponse = await result.json()
        
        updateToastLoading(toastId, 'success', data.msg)
        setSelectedStackType([])
        setSelectedSkills([])
        action.resetForm()
        return
      }      

      if (result.status === 204) {        
        updateToastLoading(toastId, 'success')
        navigate('/api/projects')
        return
      }      

      return updateToastLoading(toastId, 'error')
    } catch (error) {
      return updateToastLoading(toastId, 'error')
    }
  }

  const handleSelectSkills = (title: string, skill: string) => {   
    const stackTypeIndex = selectedStackType.findIndex((value) => value.title === title)

    if (stackTypeIndex >= 0) {
      const newFormStackType = [...selectedStackType]      
      newFormStackType[stackTypeIndex].skills = newFormStackType[stackTypeIndex].skills.includes(skill)
        ? newFormStackType[stackTypeIndex].skills.filter((value) => value !== skill)
        : [...newFormStackType[stackTypeIndex].skills, skill]
        
      setSelectedStackType(newFormStackType)
      setSelectedSkills(
        selectedSkills.includes(skill)
          ? selectedSkills.filter((value) => value !== skill)
          : [...selectedSkills, skill]
      ) 
      return     
    }

    setSelectedStackType([...selectedStackType , {
      title,
      skills: [skill]
    }])
    setSelectedSkills([...selectedSkills, skill])
  }

  const handleValidForm = (dirty: boolean, isValid: boolean) => {
    if (props.isNewForm && (!dirty || !isValid)) {
      getToastError('Campo requerido')
      return
    }

    if (!isValid) {
      getToastError('Campo requerido')
    }
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
        onSubmit={(value: Project, action) => handleSubmit(value, action)}
      >
        {({touched, dirty, isValid}) => (
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

            <div className={styles['form-skills']} >
              {
                props.skills.map((value) => (
                  <details
                    key={value._id}
                    open={true}
                    className={
                      (selectedSkills.length <= 0) && touched.stackType
                        ? `${styles['form-skills__details']} ${styles['form-skills__details--error']}`
                        : styles['form-skills__details']
                    }>

                    <summary
                      className={styles['form-skills__summary']}
                    >
                      {value.title}
                    </summary>
                  
                    <div className={styles['details']} >
                      {                    
                        value.skills.map((skill, index) => (
                          <div
                            key={index}
                            className={
                              selectedSkills.includes(skill)
                                ? `${styles['details-item']} ${styles['details-item--active']}`
                                : styles['details-item']
                            }
                            onClick={() => handleSelectSkills(value.title, skill)}
                          >
                            {skill}
                          </div>
                        ))
                      }
                    </div>
                  </details>
                ))
              }
            </div>

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