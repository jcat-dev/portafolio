import { RouteObject } from 'react-router-dom';
import { newProjectLoader, projectsLoader } from './projectLoader';
import Projects from '../../pages/api/projects/Projects';
import NewProject from '../../pages/api/projects/NewProject';


export const projectRouter: RouteObject[] = [
  {
    path: 'projects',
    Component: Projects,
    loader: projectsLoader
  },    
  {
    path: 'projects/new',
    Component: NewProject,
    loader: newProjectLoader
  }
] 