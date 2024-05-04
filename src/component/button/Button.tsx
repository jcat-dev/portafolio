import styles from './button.module.css'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>= ({className, children, ...props}) => {
  return (
    <button
      className={`${className ?? ''} ${styles['button']}`}
      {...props}
    >
      {
        children
      }
    </button>
  )
}

export default Button