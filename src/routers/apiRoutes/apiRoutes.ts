import { RouteObject } from 'react-router-dom';
import { apiProfileRoute } from './profile/apiProfileRoute';
import Projects from '../../pages/api/projects/ApiProjectsPage';
import NotFound from '../../component/notFound/NotFound';
import ApiPage from '../../pages/api/ApiPage';
import { apiSkillsRoute } from './skills/apiSkillsRoute';
import { apiProjectsLoader } from './projects/apiProjectsLoader';
import { apiProjectsRoute } from './projects/apiProjectsRoute';

export const apiRoutes: RouteObject = {
  path: '/api',
  Component: ApiPage,
  ErrorBoundary: NotFound,
  children: [
    {
      index: true,
      Component: Projects,
      loader: apiProjectsLoader,
    },    
    ...apiProjectsRoute,
    apiProfileRoute,
    ...apiSkillsRoute
  ]
}    