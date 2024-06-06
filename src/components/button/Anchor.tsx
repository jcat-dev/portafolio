import { AnchorHTMLAttributes } from 'react'
import styles from './button.module.css'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const Anchor: React.FC<Props> = ({href, className, ...props}) => {
  return (
    <a
      href={href}
      className={`${className ?? ''} ${styles['button']}`}
      {...props}
    >
      {
        props.children
      }
    </a>
  )
}

export default Anchor