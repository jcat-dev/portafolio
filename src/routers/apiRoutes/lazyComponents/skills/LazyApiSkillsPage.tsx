import { Suspense, lazy } from 'react';
import LoadingCardContainer from '../../../../components/loading/LoadingCardContainer';
const ApiSkillsPage = lazy(() => import('../../../../pages/api/skills/ApiSkillsPage'))

const LazyApiSkillsPage = () => {
  return (
    <Suspense fallback={<LoadingCardContainer />} >
      <ApiSkillsPage />
    </Suspense>
  )
}

export default LazyApiSkillsPage