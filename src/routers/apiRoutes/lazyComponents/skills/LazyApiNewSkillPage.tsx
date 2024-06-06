import { Suspense, lazy } from 'react'
import LoadingFormContainer from '../../../../component/loading/LoadingFormContainer'
const ApiNewSkillPage = lazy(() => import('../../../../pages/api/skills/ApiNewSkillPage'))

const LazyApiNewSkillPage = () => {
  return (
    <Suspense fallback={<LoadingFormContainer />} >
      <ApiNewSkillPage />
    </Suspense>
  )
}

export default LazyApiNewSkillPage