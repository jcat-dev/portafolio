import { RouteObject } from 'react-router-dom';
import { profileLoader } from './homeLoader';
import NotFound from '../../component/notFound/NotFound';
import Home from '../../pages/home/Home';


export const routerHome: RouteObject = {
  path: '/',
  Component: Home,
  ErrorBoundary: NotFound,
  loader: profileLoader
}