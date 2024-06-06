import { Suspense, lazy } from 'react'
import LoadingDoubleFormContainer from '../../../../component/loading/LoadingDoubleFormContainer'
const ApiEditProjectPage = lazy(() => import('../../../../pages/api/projects/ApiEditProjectPage'))

const LazyApiEditProjectPage = () => {
  return (
    <Suspense fallback={<LoadingDoubleFormContainer />} >
      <ApiEditProjectPage />
    </Suspense>
  )
}

export default LazyApiEditProjectPage