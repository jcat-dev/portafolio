import { RouteObject } from 'react-router-dom';
import { apiEditSkillLoader, apiSkillsLoader } from './apiSkillsLoader';
import ApiSkillsPage from '../../../pages/api/skills/ApiSkillsPage';
import ApiNewSkillPage from '../../../pages/api/skills/ApiNewSkillPage';
import ApiEditSkillPage from '../../../pages/api/skills/ApiEditSkillPage';

export const apiSkillsRoute: RouteObject[] = [
  {
    path: 'skills',
    Component: ApiSkillsPage,
    loader: apiSkillsLoader,
  },
  {
    path: 'skills/new',
    Component: ApiNewSkillPage,
  },
  {
    path: 'skills/:id',
    Component: ApiEditSkillPage,
    loader: apiEditSkillLoader
  }
]