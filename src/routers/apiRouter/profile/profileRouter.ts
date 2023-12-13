import { RouteObject } from 'react-router-dom';
import Profile from '../../../pages/api/profile/Profile';
import { profileLoader } from './profileLoader';

export const profileRouter: RouteObject[] = [
  {
    path: 'profile',
    Component: Profile,
    loader: profileLoader
  }
]