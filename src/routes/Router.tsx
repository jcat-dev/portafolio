import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerHome } from './routerHome'

const Router = () => {
  const router = createBrowserRouter([
    routerHome,
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Router

