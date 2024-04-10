import { RouteObject } from 'react-router-dom';
import AuthPage from '../../pages/auth/AuthPage';
import NotFound from '../../component/notFound/NotFound';

export const authRoutes: RouteObject = {
  path: 'auth',
  Component: AuthPage,
  ErrorBoundary: NotFound
}