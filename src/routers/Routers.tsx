import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { homeRoutes } from './homeRoutes/homeRoutes'
import { apiRoutes } from './apiRoutes/apiRoutes'
import { authRoutes } from './AuthRoutes/AuthRoutes'

const Routers = () => {
  const router = createBrowserRouter([
    homeRoutes,
    apiRoutes,
    authRoutes
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Routers

