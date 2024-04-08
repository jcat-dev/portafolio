import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { homeRoutes } from './homeRoutes/homeRoutes'
import { apiRoutes } from './apiRoutes/apiRoutes'

const Routers = () => {
  const router = createBrowserRouter([
    homeRoutes,
    apiRoutes
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Routers

