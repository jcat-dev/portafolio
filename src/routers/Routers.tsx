import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { homeProfileLoader } from './homeRoutes/loaders/homeProfileLoader'
import { homeProjectsLoader } from './homeRoutes/loaders/homeProjectsLoader'
import { homeSkillsLoader } from './homeRoutes/loaders/homeSkillsLoader'
import { apiProfileLoader } from './apiRoutes/loaders/apiProfileLoader'
import { apiEditProjectLoader, apiNewProjectLoader, apiProjectsLoader } from './apiRoutes/loaders/apiProjectsLoader'
import { apiEditSkillLoader, apiSkillsLoader } from './apiRoutes/loaders/apiSkillsLoader'
import HomePage from '../pages/home/HomePage'
import NotFound from '../components/notFound/NotFound'
import LazyHomeProfilePage from './homeRoutes/lazyComponents/LazyHomeProfilePage'
import LazyHomeProjectsPage from './homeRoutes/lazyComponents/LazyHomeProjectsPage'
import LazyHomeSkillsPage from './homeRoutes/lazyComponents/LazyHomeSkillsPage'
import LazyHomeContactPage from './homeRoutes/lazyComponents/LazyHomeContactPage'
import LazyAuthPage from './AuthRoutes/LazyAuthPage'
import ApiPage from '../pages/api/ApiPage'
import LazyApiProfilePage from './apiRoutes/lazyComponents/LazyApiProfilePage'
import LazyApiProjectsPage from './apiRoutes/lazyComponents/projects/LazyApiProjectsPage'
import LazyApiEditProjectPage from './apiRoutes/lazyComponents/projects/LazyApiEditProjectPage'
import LazyApiNewProjectPage from './apiRoutes/lazyComponents/projects/LazyApiNewProjectPage'
import LazyApiSkillsPage from './apiRoutes/lazyComponents/skills/LazyApiSkillsPage'
import LazyApiNewSkillPage from './apiRoutes/lazyComponents/skills/LazyApiNewSkillPage'
import LazyApiEditSkillPage from './apiRoutes/lazyComponents/skills/LazyApiEditSkillPage'

const Routers = () => {
  const router = createBrowserRouter(  
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomePage />} errorElement={<NotFound />} >
          <Route index element={<LazyHomeProfilePage />} loader={homeProfileLoader} />
          <Route path='profile' element={<LazyHomeProfilePage />} loader={homeProfileLoader} />
          <Route path='projects' element={<LazyHomeProjectsPage />} loader={homeProjectsLoader} />
          <Route path='skills' element={<LazyHomeSkillsPage />} loader={homeSkillsLoader}          />
          <Route path='contact' element={<LazyHomeContactPage />} />          
        </Route>

        <Route path='/api' element={<ApiPage />} errorElement={<NotFound />} >
          <Route index element={<LazyApiProfilePage />} loader={apiProfileLoader} />
          <Route path='profile' element={<LazyApiProfilePage />} loader={apiProfileLoader} />
          <Route path='projects' element={<LazyApiProjectsPage />} loader={apiProjectsLoader} />
          <Route path='projects/new' element={<LazyApiNewProjectPage />} loader={apiNewProjectLoader} />
          <Route path='projects/:id' element={<LazyApiEditProjectPage />} loader={apiEditProjectLoader} />
          <Route path='skills' element={<LazyApiSkillsPage />} loader={apiSkillsLoader} />
          <Route path='skills/new' element={<LazyApiNewSkillPage />} />
          <Route path='skills/:id' element={<LazyApiEditSkillPage />} loader={apiEditSkillLoader} />
        </Route>

        <Route path='/auth' element={<LazyAuthPage />} errorElement={<NotFound />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default Routers

