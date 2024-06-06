import { Suspense, lazy } from 'react';
import LoadingContactContainer from '../../../component/loading/LoadingContactContainer';
const HomeContactPage = lazy(() => import('../../../pages/home/contact/HomeContactPage'))

const LazyHomeContactPage = () => {
  return (
    <Suspense fallback={<LoadingContactContainer />} >
      <HomeContactPage />
    </Suspense>
  )
}

export default LazyHomeContactPage