import { Outlet } from 'react-router-dom'
import LayoutToast from '../../layout/LayoutToast';

const Api = () => {
  return (
    <LayoutToast>
      <Outlet />
    </LayoutToast>
  )
}

export default Api