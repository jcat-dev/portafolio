import { Suspense, lazy } from 'react';
import LoadingCardContainer from '../../../components/loading/LoadingCardContainer';
const HomeProjectsPage = lazy(() => import('../../../pages/home/projects/HomeProjectsPage'))

const LazyHomeProjectsPage = () => {
  return (   
    <Suspense fallback={<LoadingCardContainer />} >
      <HomeProjectsPage />
    </Suspense>
  )
}

export default LazyHomeProjectsPage