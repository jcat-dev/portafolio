import { Suspense, lazy } from 'react';
import LoadingProfileContainer from '../../../component/loading/LoadingProfileContainer';
const HomeProfilePage = lazy(() => import('../../../pages/home/profile/HomeProfilePage'))

const LazyHomeProfilePage = () => {
  return (
    <Suspense fallback={<LoadingProfileContainer />} >
      <HomeProfilePage />
    </Suspense>
  )
}

export default LazyHomeProfilePage