import { RouteObject } from 'react-router-dom';
import { editProjectLoader, newProjectLoader, projectsLoader } from './projectLoader';
import Projects from '../../../pages/api/projects/Projects';
import NewProject from '../../../pages/api/projects/NewProject';
import EditProject from '../../../pages/api/projects/EditProject';

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
  },
  {
    path: 'projects/:id',
    Component: EditProject,
    loader: editProjectLoader
  }
] 
