import LoadingBox from './LoadingBox'
import LoadingContainer from './LoadingContainer'
import styles from './css/loadingProfileContainer.module.css'

const LoadingProfileContainer = () => {
  return (
    <LoadingContainer >
      <LoadingBox loadingClassName={styles['loading-box']} />
      <LoadingBox loadingClassName={styles['loading-box']} />
      <LoadingBox loadingClassName={styles['loading-box']} />
      <LoadingBox loadingClassName={styles['loading-box']} />
    </LoadingContainer>
  )
}

export default LoadingProfileContainer