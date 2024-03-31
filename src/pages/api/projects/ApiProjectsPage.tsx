import { Link, useLoaderData } from 'react-router-dom'
import { ProjectWithId } from '../../../Types/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../utils/fetch'
import { useEffect, useState } from 'react'
import { getToastLoading, updateToastLoading } from '../../../utils/toast'
import Button from '../../../component/button/Button'
import LoadingImage from '../../../component/loading/LoadingImage'
import styles from './css/apiProjects.module.css'

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
      
      if (result.status === 204) {
        setProjects(projects?.filter((value) => value._id !== id))
        updateToastLoading(toastId, 'success', result.statusText)
        return
      }

      updateToastLoading(toastId, 'error', result.statusText)
    } catch (error) {
      updateToastLoading(toastId, 'error')
    }
  }

  return (
    <div className={styles['projects']} >
      <Link
        to={'/api/projects/new'}
        className={styles['projects__add-button']}
        aria-label='agregar nuevo elemento'
      >
        <FontAwesomeIcon 
          icon={faPlus} 
          size='lg'
        />
      </Link>

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

        <tbody>
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

                <td className={`${styles['table-body__tr-td']} ${styles['td']}`} >
                  <LoadingImage 
                    src={value.pageImgURL} 
                    alt="project image" 
                    classNameContainer={styles['td-box-img']}
                    classNameImg={styles['td-box-img__img']}  
                  />
                </td>
                  
                <td 
                  className={`${styles['table-body__tr-td']} ${styles['td']}`} 
                >                    
                  <div className={styles['td-box']} >
                    <Link 
                      to={`/api/projects/${value._id}`} 
                      className={styles['td-box__edit-button']}
                      aria-label='editar elemento'
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>          

                    <Button 
                      type='button'
                      icon={true}
                      className={styles['td-box__delete-button']}
                      aria-label='eliminar elemento'
                      onClick={() => handleDeleteClick(value._id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          }          
        </tbody>
      </table>       
    </div>
  )
}

export default ApiProjectsPage