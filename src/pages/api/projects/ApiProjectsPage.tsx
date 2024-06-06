import { useLoaderData } from 'react-router-dom'
import { ProjectWithId } from '../../../Types/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../utils/fetch'
import { useEffect, useState } from 'react'
import { getToastLoading, updateToastLoading } from '../../../utils/toast'
import { OK_STATUS } from '../../../constants/HTTP_STATUS'
import Button from '../../../component/button/Button'
import LoadingImage from '../../../component/loading/LoadingImage'
import LinkButton from '../../../component/button/LinkButton'
import styles from './css/apiProjectsPage.module.css'

const ApiProjectsPage = () => {
  const data = useLoaderData() as ProjectWithId[] | []
  const [projects, setProjects] = useState<ProjectWithId[]>()

  useEffect(() => {
    if (data.length >= 0) {
      setProjects(data)
    }

  }, [data])

  const handleDeleteClick = async (id: string) => {
    const toastId = getToastLoading()

    try {
      const result = await setFetch(`${String(import.meta.env.VITE_PROJECT_API)}/${id}`,'DELETE')
      const msg = await result.text()

      if (result.status === OK_STATUS) {
        setProjects(projects?.filter((value) => value._id !== id))
        updateToastLoading(toastId, 'success', msg)
        return
      }

      updateToastLoading(toastId, 'error', msg)
    } catch (error) {
      updateToastLoading(toastId, 'error')
    }
  }

  return (
    <main className={styles['projects']} >
      <LinkButton
        to={'/api/projects/new'}
        className={styles['projects__add-button']}
        aria-label='agregar nuevo elemento'
      >
        <FontAwesomeIcon 
          icon={faPlus} 
          size='lg'
        />
      </LinkButton>

      <table className={styles['table']} >
        <thead className={styles['table-heal']} >
          <tr>
            <th className={styles['table-head__tr-th']} >
              Title
            </th>

            <th className={styles['table-head__tr-th']} >
              Stack
            </th>

            <th className={styles['table-head__tr-th']} />

            <th className={`${styles['table-head__tr-th']} ${styles['table-head__tr-th--text-center']}`} >
              Action
            </th>
          </tr>
        </thead>

        <tbody className={styles['table-body']}>
          {
            projects?.map((value, index) => (
              <tr 
                key={index} 
                className={styles['table-body__tr']}
              >
                <td className={styles['table-body__tr-td']} >
                  {value.projectTitle}
                </td>

                <td className={styles['table-body__tr-td']} >
                  {value.stackTitle}
                </td>

                <td className={styles['table-body__tr-td']} >
                  <LoadingImage 
                    src={value.pageImgURL} 
                    alt="project image" 
                    loadingClassName={styles['td-loading']}
                    imgClassName={styles['td-img']}  
                  />
                </td>
                  
                <td 
                  className={`${styles['table-body__tr-td']} ${styles['td-box']}`} 
                >                    
                  <LinkButton
                    to={`/api/projects/${value._id}`} 
                    className={styles['td-box__edit-button']}
                    aria-label='editar elemento'
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </LinkButton>  

                  <Button 
                    type='button'
                    className={styles['td-box__delete-button']}
                    aria-label='eliminar elemento'
                    onClick={() => handleDeleteClick(value._id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </Button>
                </td>
              </tr>
            ))
          }          
        </tbody>
      </table>       
    </main>
  )
}

export default ApiProjectsPage