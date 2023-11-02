import styles from './button.module.css'

interface Props {
  type: 'button' | 'submit' | 'reset'
  color: 'primary' | 'secondary'
  variant: 'solid' | 'outline'
  className?: string
  children?: React.ReactNode
}

const Button: React.FC<Props>= ({color, variant, className, ...props}) => {
  const newClass = `${styles[`button-${variant}`]} ${styles[`button-${variant}--color-${color}`]} ${className}`
  
  return (
    <button
      type={props.type}
      className={newClass}
    >
      {
        props.children
      }
    </button>
  )
}

export default Button