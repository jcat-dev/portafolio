import { RouteObject } from 'react-router-dom';
import { editSkillLoader, skillsLoader } from './skillsLoader';
import Skills from '../../../pages/api/skills/Skills';
import EditSkill from '../../../pages/api/skills/EditSkill';
import NewSkill from '../../../pages/api/skills/NewSkill';

export const skillsRouter: RouteObject[] = [
  {
    path: 'skills',
    Component: Skills,
    loader: skillsLoader,
  },
  {
    path: 'skills/new',
    Component: NewSkill,
  },
  {
    path: 'skills/:id',
    Component: EditSkill,
    loader: editSkillLoader
  }
]