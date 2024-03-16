import { RouteObject } from 'react-router-dom';
import { projectRouter } from './projects/projectRouter';
import { projectsLoader } from './projects/projectLoader';
import { profileRouter } from './profile/profileRouter';
import { skillsRouter } from './skills/skillsRouter';
import Api from '../../pages/api/Api';
import Projects from '../../pages/api/projects/Projects';
import NotFound from '../../component/notFound/NotFound';

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
    ...projectRouter,
    ...profileRouter,
    ...skillsRouter
  ]
}    