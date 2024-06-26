import { Suspense, lazy } from 'react';
import LoadingTableContainer from '../../../../components/loading/LoadingTableContainer';
const ApiProjectsPage = lazy(() => import('../../../../pages/api/projects/ApiProjectsPage'))

const LazyApiProjectsPage = () => {
  return (
    <Suspense fallback={<LoadingTableContainer />} >
      <ApiProjectsPage />
    </Suspense>
  )
}

export default LazyApiProjectsPage