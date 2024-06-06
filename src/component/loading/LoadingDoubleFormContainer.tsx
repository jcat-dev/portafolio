import LoadingBox from './LoadingBox'
import LoadingContainer from './LoadingContainer'
import styles from './css/loadingDoubleFormContainer.module.css'

const LoadingDoubleFormContainer = () => {
  return (
    <LoadingContainer>
      <div className={styles['loading-form']} >
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
        <LoadingBox loadingClassName={styles['loading-box']} />
      </div>
    </LoadingContainer>
  )
}

export default LoadingDoubleFormContainer