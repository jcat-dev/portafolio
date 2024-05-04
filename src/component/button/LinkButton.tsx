import { Link, LinkProps } from 'react-router-dom'
import styles from './button.module.css'

const LinkButton: React.FC<LinkProps> = ({className, children, ...props}) => {
  return (
    <Link
      className={`${className ?? ''} ${styles['button']}`}
      {...props}
    >
      {
        children
      }
    </Link>
  )
}

export default LinkButton