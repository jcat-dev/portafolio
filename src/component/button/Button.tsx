import styles from './button.module.css'

interface Props {
  type: 'button' | 'submit' | 'reset'
  'aria-label': string
  disabled?: boolean
  hidden?: boolean
  onClick?: () => void
  
  className?: string
  children?: React.ReactNode
  icon?: boolean
}

const Button: React.FC<Props>= ({icon, className, children, ...props}) => {
  return (
    <button
      className={
        icon
          ? `${className ?? ''} ${styles['button']} ${styles['button-icon']}`
          : `${className ?? ''} ${styles['button']}`
      }
      {...props}
    >
      {
        children
      }
    </button>
  )
}

export default Button