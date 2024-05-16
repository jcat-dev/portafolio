import { RouteObject } from 'react-router-dom';
import { apiProfileRoute } from './profile/apiProfileRoute';
import { apiSkillsRoute } from './skills/apiSkillsRoute';
import { apiProjectsRoute } from './projects/apiProjectsRoute';
import { apiProfileLoader } from './profile/apiProfileLoader';
import NotFound from '../../component/notFound/NotFound';
import ApiPage from '../../pages/api/ApiPage';
import ApiProfilePage from '../../pages/api/profile/ApiProfilePage';

export const apiRoutes: RouteObject = {
  path: '/api',
  Component: ApiPage,
  ErrorBoundary: NotFound,
  children: [
    {
      index: true,
      Component: ApiProfilePage,
      loader: apiProfileLoader,
    },    
    ...apiProjectsRoute,
    apiProfileRoute,
    ...apiSkillsRoute
  ]
}    