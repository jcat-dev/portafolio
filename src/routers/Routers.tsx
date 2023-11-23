import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerHome } from './homeRouter/homeRouter'
import { routerApi } from './apiRouter/apiRouter'

const Routers = () => {
  const router = createBrowserRouter([
    routerHome,
    routerApi
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Routers

