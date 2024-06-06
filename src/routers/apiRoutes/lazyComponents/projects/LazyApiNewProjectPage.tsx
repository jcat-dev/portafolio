import { Suspense, lazy } from 'react'
import LoadingDoubleFormContainer from '../../../../component/loading/LoadingDoubleFormContainer'
const ApiNewProjectPage = lazy(() => import('../../../../pages/api/projects/ApiNewProjectPage'))

const LazyApiNewProjectPage = () => {
  return (
    <Suspense fallback={<LoadingDoubleFormContainer />} >
      <ApiNewProjectPage />
    </Suspense>
  )
}

export default LazyApiNewProjectPage
