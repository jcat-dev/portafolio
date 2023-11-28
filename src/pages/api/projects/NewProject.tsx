import { Form, Formik, FormikHelpers } from 'formik'
import { Project, StackType } from '../../../Types/Project'
import { Link, useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import { useState } from 'react'
import { getToastError, getToastLoading, updateToastLoading } from '../../../utils/toast'
import { setFetch } from '../../../utils/fetch'
import { FetchResponse } from '../../../Types/FetchResponse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'
import Button from '../../../component/button/Button'
import MyTextInput from '../../../component/formik/FormikInput'
import FormikTextArea from '../../../component/formik/FormikTextArea'
import styles from './css/newProject.module.css'
import styleBtn from '../../../component/button/button.module.css'

const NewProject = () => {
  const data = useLoaderData() as SkillWithId[]
  const [formStackType, setFormStackType] = useState<StackType[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const initialValues: Project = {
    description: '',
    pageImgURL: '',
    pageURL: '',
    projectTitle: '',
    repositoryURL: '',
    stackTitle: '',
    stackType: []
  }

  const validationSchema = Yup.object({
    description: Yup.string().required(),
    projectTitle: Yup.string().required(),
    stackTitle: Yup.string().required(),
    stackType: Yup.array(Yup.string().required()).required(),
    pageURL: Yup.string().url().required(),
    repositoryURL: Yup.string().url().required(),
    pageImgURL: Yup.string().url().required(),
  })

  const handleSubmit = async (values: Project, action: FormikHelpers<Project>) => {
    const stackType = formStackType.filter((value) => value.skills.length > 0)
    if (stackType.length === 0) return getToastError('Campo requerido')
    
    const toastId = getToastLoading() 

    try {
      const result = await setFetch(
        String(import.meta.env.VITE_PROJECT_API), 
        'POST', 
        {...values, stackType: [...stackType]}
      )

      if (result.status === 201) {
        const data: FetchResponse = await result.json()
        
        updateToastLoading(toastId, 'success', data.msg)
        setFormStackType([])
        setSelectedSkills([])
        action.resetForm()
        return
      }      

      return updateToastLoading(toastId, 'error')
    } catch (error) {
      return updateToastLoading(toastId, 'error')
    }
  }

  const handleSelectSkills = (title: string, skill: string) => {   
    const stackTypeIndex = formStackType.findIndex((value) => value.title === title)

    if (stackTypeIndex >= 0) {
      const newFormStackType = [...formStackType]      
      newFormStackType[stackTypeIndex].skills = newFormStackType[stackTypeIndex].skills.includes(skill)
        ? newFormStackType[stackTypeIndex].skills.filter((value) => value !== skill)
        : [...newFormStackType[stackTypeIndex].skills, skill]
        
      setFormStackType(newFormStackType)
      setSelectedSkills(
        selectedSkills.includes(skill)
          ? selectedSkills.filter((value) => value !== skill)
          : [...selectedSkills, skill]
      ) 
      return     
    }

    setFormStackType([...formStackType , {
      title,
      skills: [skill]
    }])
    setSelectedSkills([...selectedSkills, skill])
  }

  const handleValidForm = (dirty: boolean, isValid: boolean) => {
    if (!dirty || !isValid) {
      getToastError('Campo requerido')
    }
  }

  return (
    <div className={styles['container']} >
      <Link
        to={'../projects'}
        aria-label='volver a la pagina anterior'
        className={`${styles['back-link']} ${styleBtn['button']} ${styleBtn['button-icon']}`}
      >
        <FontAwesomeIcon 
          size='2xl'
          icon={faLeftLong} 
        />
      </Link>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value: Project, action) => handleSubmit(value, action)}
      >
        {(props) => (
          <Form className={
            (!props.dirty || !props.isValid || selectedSkills.length <= 0)
              ? `${styles['form-project']} ${styles['form-project--error']}`
              : styles['form-project']
          }>
            <div className={styles['form-project__field']} >
              <MyTextInput
                type='text'
                id='projectTitle'
                name='projectTitle'
                labelTitle='Project Title'
                placeholder='My project'
              />
            </div>
          
            <div className={styles['form-project__field']} >
              <MyTextInput
                type='text'
                id='pageURL'
                name='pageURL'
                labelTitle='Page URL'
                placeholder='https://www.ej'
              />
            </div>         

            <div className={styles['form-project__field']} >
              <MyTextInput
                type='text'
                id='repositoryURL'
                name='repositoryURL'
                labelTitle='Repository URL'
                placeholder='https://www.ej'
              />
            </div>

            <div className={styles['form-project__field']} >
              <MyTextInput
                type='text'
                id='pageImgURL'
                name='pageImgURL'
                labelTitle='Image Url'
                placeholder='https://www.ej'
              />
            </div>
   
            <div className={styles['form-project__field-textarea']}>
              <FormikTextArea 
                name='description'
                id='description'
                labelTitle='Description'
              />
            </div>

            <div className={styles['form-project__field']} >
              <MyTextInput
                type='text'
                id='stackTitle'
                name='stackTitle'
                labelTitle='Stack Title'
                placeholder='Full Stack'
              />
            </div>

            <div className={styles['select-skills']} >
              {
                data.map((value) => (
                  <details
                    key={value._id}
                    className={
                      (selectedSkills.length <= 0) && props.touched.stackType
                        ? `${styles['select-skills__details']} ${styles['select-skills__details--error']}`
                        : styles['select-skills__details']
                    }>

                    <summary
                      className={styles['select-skills__summary']}
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
              className={
                (props.isValid && selectedSkills.length > 0)
                  ? `${styles['form-btn']}`
                  : `${styles['form-btn']} ${styles['form-btn--error']}`
              }
              onClick={() => handleValidForm(props.dirty, props.isValid)}
            >
            Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewProject