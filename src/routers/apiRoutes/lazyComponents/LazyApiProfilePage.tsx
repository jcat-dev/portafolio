import { Suspense, lazy } from 'react';
import LoadingFormContainer from '../../../components/loading/LoadingFormContainer';
const ApiProfilePage = lazy(() => import('../../../pages/api/profile/ApiProfilePage'))

const LazyApiProfilePage = () => {
  return (
    <Suspense fallback={<LoadingFormContainer />} >
      <ApiProfilePage />
    </Suspense>
  )
}

export default LazyApiProfilePage