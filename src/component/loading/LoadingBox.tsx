import styles from './css/loadingBox.module.css'

interface Props {
  loadingClassName: string
}

const LoadingBox: React.FC<Props> = ({loadingClassName}) => {
  return (
    <div 
      className={`${styles['loading']} ${loadingClassName}`} 
    />
  )
}

export default LoadingBox