import LoadingBox from './LoadingBox'
import LoadingContainer from './LoadingContainer'
import LoadingTitle from './LoadingTitle'
import styles from './css/loadingCardContainer.module.css'

const LoadingCardContainer = () => {
  return (
    <LoadingContainer >
      <LoadingTitle />      
      <LoadingBox loadingClassName={styles['loading-box']} />
      <LoadingBox loadingClassName={styles['loading-box']} />
    </LoadingContainer>
  )
}

export default LoadingCardContainer