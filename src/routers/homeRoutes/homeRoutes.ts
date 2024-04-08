import { RouteObject } from 'react-router-dom';
import { homeProfileLoader } from './profile/homeProfileLoader';
import { homeProfileRoute } from './profile/homeProfileRoute';
import { homeSkillsRoute } from './skills/homeSkillsRoute';
import { homeProjectRoute } from './projects/homeProjectsRoute';
import { homeContactRoute } from './contact/homeContactRoute';
import NotFound from '../../component/notFound/NotFound';
import HomePage from '../../pages/home/HomePage';
import HomeProfile from '../../pages/home/profile/HomeProfilePage';

export const homeRoutes: RouteObject = {
  path: '/',
  Component: HomePage,
  ErrorBoundary: NotFound,
  children:[
    {
      index: true,
      Component: HomeProfile,
      loader: homeProfileLoader,
    },
    homeProfileRoute,
    homeSkillsRoute,
    homeProjectRoute,
    homeContactRoute
  ]
}