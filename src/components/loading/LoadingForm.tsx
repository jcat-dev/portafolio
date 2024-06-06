import LoadingBox from './LoadingBox'
import styles from './css/loadingForm.module.css'

const LoadingForm = () => {
  return (
    <div className={styles['loading-form']} >
      <LoadingBox loadingClassName={styles['loading-field']} />
      <LoadingBox loadingClassName={styles['loading-field']} />
      <LoadingBox loadingClassName={`${styles['loading-field']} ${styles['loading-field--textarea']}`} />
      <LoadingBox loadingClassName={styles['loading-field']} />
    </div>
  )
}

export default LoadingForm