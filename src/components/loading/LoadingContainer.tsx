import styles from './css/loadingContainer.module.css'

interface Props {
  children: React.ReactNode
}

const LoadingContainer: React.FC<Props> = ({children}) => {
  return (
    <div className={styles['loading-container']} >
      {
        children
      }
    </div>
  )
}

export default LoadingContainer