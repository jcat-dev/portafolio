import { Link, LinkProps } from 'react-router-dom'
import styles from './button.module.css'

interface Props extends LinkProps {
  icon?: boolean
}

const LinkButton: React.FC<Props> = ({icon, className, children, ...props}) => {
  return (
    <Link
      className={
        icon
          ? `${className ?? ''} ${styles['button']} ${styles['button-icon']}`
          : `${className ?? ''} ${styles['button']}`
      }
      {
        ...props
      }
    >
      {
        children
      }
    </Link>
  )
}

export default LinkButton