import LoadingBox from './LoadingBox'
import LoadingContainer from './LoadingContainer'
import LoadingForm from './LoadingForm'
import LoadingTitle from './LoadingTitle'
import styles from './css/loadingContactContainer.module.css'

const LoadingContactContainer = () => {
  return (
    <LoadingContainer >
      <LoadingTitle />

      <div className={styles['loading-box']} >
        <LoadingBox loadingClassName={styles['loading-link']} />
        <LoadingBox loadingClassName={styles['loading-link']} />
        <LoadingBox loadingClassName={styles['loading-link']} />
      </div>

      <LoadingForm />
    </LoadingContainer>
  )
}

export default LoadingContactContainer