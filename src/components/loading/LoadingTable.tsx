import LoadingBox from './LoadingBox'
import styles from './css/loadingTable.module.css'

const LoadingTable = () => {
  return (
    <>
      <LoadingBox loadingClassName={styles['loading-head']} />
      <LoadingBox loadingClassName={styles['loading-table']} />
      <LoadingBox loadingClassName={styles['loading-table']} />
    </>
  )
}

export default LoadingTable