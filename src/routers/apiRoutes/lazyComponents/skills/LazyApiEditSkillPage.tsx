import { Suspense, lazy } from 'react'
import LoadingFormContainer from '../../../../components/loading/LoadingFormContainer'
const ApiEditSkillPage = lazy(() => import('../../../../pages/api/skills/ApiEditSkillPage'))

const LazyApiEditSkillPage = () => {
  return (
    <Suspense fallback={<LoadingFormContainer />} >
      <ApiEditSkillPage />
    </Suspense>
  )
}

export default LazyApiEditSkillPage