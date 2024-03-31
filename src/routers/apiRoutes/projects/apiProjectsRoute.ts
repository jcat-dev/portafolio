import { RouteObject } from 'react-router-dom';
import { apiEditProjectLoader, apiNewProjectLoader, apiProjectsLoader } from './apiProjectsLoader';
import ApiProjectsPage from '../../../pages/api/projects/ApiProjectsPage';
import ApiNewProjectPage from '../../../pages/api/projects/ApiNewProjectPage';
import ApiEditProjectPage from '../../../pages/api/projects/ApiEditProjectPage';

export const apiProjectsRoute: RouteObject[] = [
  {
    path: 'projects',
    Component: ApiProjectsPage,
    loader: apiProjectsLoader
  },    
  {
    path: 'projects/new',
    Component: ApiNewProjectPage,
    loader: apiNewProjectLoader
  },
  {
    path: 'projects/:id',
    Component: ApiEditProjectPage,
    loader: apiEditProjectLoader
  }
] 
