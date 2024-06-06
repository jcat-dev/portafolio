import LoadingBox from './LoadingBox'
import styles from './css/loadingTitle.module.css'

const LoadingTitle = () => {
  return (
    <LoadingBox loadingClassName={styles['loading-title']} />
  )
}

export default LoadingTitle