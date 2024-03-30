import { Link, useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../utils/fetch'
import { getToastLoading, updateToastLoading } from '../../../utils/toast'
import { useEffect, useState } from 'react'
import styles from './css/apiSkillsPage.module.css'
import Button from '../../../component/button/Button'

const ApiSkillsPage = () => {
  const loaderSkills = useLoaderData() as (SkillWithId[] | null)
  const [skills, setSkills] = useState<SkillWithId[]>()

  useEffect(() => {
    if (loaderSkills) {
      setSkills(loaderSkills)
    }
  }, [loaderSkills])
  

  const handleDeleteBtnClick = async (id: string) => {
    const toastID = getToastLoading()

    try {
      const result = await setFetch(`${String(import.meta.env.VITE_SKILL_API)}/${id}`, 'DELETE')

      if (result.status === 204) {
        updateToastLoading(toastID, 'success', result.statusText)
        setSkills(skills?.filter((value) => value._id !== id))
        return
      }

      updateToastLoading(toastID, 'error', result.statusText)
    } catch (error) {
      updateToastLoading(toastID, 'error')
    }
  }

  return (
    <div className={styles['skills-container']} >
      <Link
        to={'new'}
        className={styles['add']}
      >
        <FontAwesomeIcon 
          icon={faPlus} 
          size='lg'
        />
      </Link>

      <ul className={styles['skills']} >
        {
          skills?.map((value) => (
            <li
              key={value._id}
              className={styles['skills__item']} 
            >
              <p className={styles['skills__item-title']} >
                {value.title}
              </p>

              {value.skills.map((skill, index) => (
                <p
                  key={index}
                  className={styles['skills__item-skill']}
                >
                  {skill}
                </p>
              ))}

              <div className={styles['skills__item-btns']} >
                <Link
                  aria-label='editar habilidad'
                  className={styles['edit-btn']}
                  to={value._id}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>

                <Button 
                  aria-label='eliminar habilidades'
                  type='button'
                  className={styles['delete-btn']}
                  onClick={() => handleDeleteBtnClick(value._id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ApiSkillsPage