import { Suspense, lazy } from 'react';
import LoadingCardContainer from '../../../components/loading/LoadingCardContainer';
const HomeSkillsPage = lazy(() => import('../../../pages/home/skills/HomeSkillsPage'))

const LazyHomeSkillsPage = () => {
  return (
    <Suspense fallback={<LoadingCardContainer />} >
      <HomeSkillsPage />
    </Suspense>
  )
}

export default LazyHomeSkillsPage