import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerHome } from './routerHome'
import { routerApi } from './routerApi'

const Router = () => {
  const router = createBrowserRouter([
    routerHome,
    routerApi
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Router

