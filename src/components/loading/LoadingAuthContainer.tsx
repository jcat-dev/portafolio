import LoadingBox from './LoadingBox'
import styles from './css/loadingAuth.module.css'

const LoadingAuthContainer = () => {
  return (
    <div className={styles['loading']}>
      <LoadingBox loadingClassName={styles['loading-box']} />
      <LoadingBox loadingClassName={styles['loading-box']} />
    </div>
  )
}

export default LoadingAuthContainer