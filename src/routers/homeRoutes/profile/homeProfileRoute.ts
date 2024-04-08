import { RouteObject } from 'react-router-dom';
import { homeProfileLoader } from './homeProfileLoader';
import HomeProfilePage from '../../../pages/home/profile/HomeProfilePage';


export const homeProfileRoute: RouteObject = {
  path: '/profile',
  Component: HomeProfilePage,
  loader: homeProfileLoader
}