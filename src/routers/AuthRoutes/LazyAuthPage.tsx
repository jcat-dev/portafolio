import { Suspense, lazy } from 'react';
import LoadingAuthContainer from '../../component/loading/LoadingAuthContainer';
const AuthPage = lazy(() => import('../../pages/auth/AuthPage'))

const LazyAuthPage = () => {
  return (
    <Suspense fallback={<LoadingAuthContainer />} >
      <AuthPage />
    </Suspense>
  )
}

export default LazyAuthPage