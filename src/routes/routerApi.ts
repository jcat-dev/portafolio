import { RouteObject } from 'react-router-dom';
import { projectRouter } from '../pages/api/projects/router';
import { projectsLoader } from '../pages/api/projects/loader';
import Api from '../pages/api/Api';
import Projects from '../pages/api/projects/Projects';
import NotFound from '../component/notFound/NotFound';

export const routerApi: RouteObject = {
  path: '/api',
  Component: Api,
  ErrorBoundary: NotFound,
  children: [
    {
      index: true,
      Component: Projects,
      loader: projectsLoader,
    },    
    ...projectRouter
  ]
}    