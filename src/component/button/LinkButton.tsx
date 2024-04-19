import { Link, RelativeRoutingType } from 'react-router-dom'
import { ReactNode } from 'react'
import styles from './button.module.css'

interface Props {
  to: string
  children: ReactNode
  relative: RelativeRoutingType 
  'aria-label': string
  
  icon?: boolean
  className?: string
}

const LinkButton: React.FC<Props> = (props) => {
  return (
    <Link
      to={props.to}
      relative={props.relative}
      aria-label={props['aria-label']}
      className={
        props.icon
          ? `${props.className ?? ''} ${styles['button']} ${styles['button-icon']}`
          : `${props.className ?? ''} ${styles['button']}`
      }
    >
      {
        props.children
      }
    </Link>
  )
}

export default LinkButton