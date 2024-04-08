import { RouteObject } from 'react-router-dom';
import HomeProjectsPage from '../../../pages/home/projects/HomeProjectsPage';
import { homeProjectsLoader } from './homeProjectsLoader';

export const homeProjectRoute: RouteObject = {
  path: 'projects',
  Component: HomeProjectsPage,
  loader: homeProjectsLoader
}