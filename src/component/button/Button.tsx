import styles from './button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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