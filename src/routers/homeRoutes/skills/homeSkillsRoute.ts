import { RouteObject } from 'react-router-dom';
import { homeSkillsLoader } from './homeSkillsLoader';
import HomeSkillsPage from '../../../pages/home/skills/HomeSkillsPage';

export const homeSkillsRoute: RouteObject = {
  path: 'skills',
  Component: HomeSkillsPage,
  loader: homeSkillsLoader
}