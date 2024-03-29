import { RouteObject } from 'react-router-dom';
import { apiProfileLoader } from './apiProfileLoader';
import ApiProfilePage from '../../../pages/api/profile/ApiProfilePage';

export const apiProfileRoute: RouteObject = {
  path: 'profile',
  Component: ApiProfilePage,
  loader: apiProfileLoader
}
