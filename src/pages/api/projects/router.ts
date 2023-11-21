import { RouteObject } from 'react-router-dom';
import { newProjectLoader, projectsLoader } from './loader';
import Projects from './Projects';
import NewProject from './NewProject';


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