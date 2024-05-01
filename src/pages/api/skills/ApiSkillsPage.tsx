import { useLoaderData } from 'react-router-dom'
import { SkillWithId } from '../../../Types/Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { setFetch } from '../../../utils/fetch'
import { getToastLoading, updateToastLoading } from '../../../utils/toast'
import { useEffect, useState } from 'react'
import { OK_STATUS } from '../../../utils/httpStatus'
import styles from './css/apiSkillsPage.module.css'
import Button from '../../../component/button/Button'
import LinkButton from '../../../component/button/LinkButton'

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
      const msg = await result.text()

      if (result.status === OK_STATUS) {
        updateToastLoading(toastID, 'success', msg)
        setSkills(skills?.filter((value) => value._id !== id))
        return
      }

      updateToastLoading(toastID, 'error', msg)
    } catch (error) {
      updateToastLoading(toastID, 'error')
    }
  }

  return (
    <main className={styles['container']} >
      <LinkButton
        to={'new'}
        className={styles['add-btn']}
        aria-label='create new skills'
      >
        <FontAwesomeIcon 
          icon={faPlus} 
          size='lg'
        />
      </LinkButton>

      <ul className={styles['stacks']} >
        {
          skills?.map((value) => (
            <li
              key={value._id}
              className={styles['stacks-item']} 
            >
              <p className={styles['stacks-item__title']} >
                {value.title}
              </p>

              <ul className={styles['stacks-item__skills']} >
                {value.skills.map((skill, index) => (
                  <li
                    key={index}
                    className={styles['stacks-item__skills-item']}
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className={styles['stacks-item__btns']} >
                <LinkButton
                  aria-label='editar habilidad'
                  className={styles['edit-btn']}
                  to={value._id}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </LinkButton>

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
    </main>
  )
}

export default ApiSkillsPage