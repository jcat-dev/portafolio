import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { getToastLoading, updateToastLoading } from '../../utils/toast'
import { setFetch } from '../../utils/fetch'
import { OK_STATUS } from '../../utils/httpStatus'
import LinkButton from '../button/LinkButton'
import Button from '../button/Button'
import styles from './stackTypeButtons.module.css'

interface Props {
  id: string
  onDelete: (id: string) => void
}

const StackTypeButtons: React.FC<Props> = ({id, onDelete}) => {
  const handleDelete = async (id: string) => {
    const toastID = getToastLoading()

    try {
      const result = await setFetch(`${String(import.meta.env.VITE_SKILL_API)}/${id}`, 'DELETE')
      const msg = await result.text()

      if (result.status === OK_STATUS) {
        updateToastLoading(toastID, 'success', msg)
        onDelete(id)
        return
      }

      updateToastLoading(toastID, 'error', msg)
    } catch (error) {
      updateToastLoading(toastID, 'error')
    }
  }
  
  return (
    <div className={styles['buttons']} >
      <LinkButton
        aria-label='editar habilidad'
        className={styles['edit']}
        to={id}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </LinkButton>

      <Button 
        aria-label='eliminar habilidades'
        type='button'
        className={styles['delete']}
        onClick={() => handleDelete(id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  )
}

export default StackTypeButtons