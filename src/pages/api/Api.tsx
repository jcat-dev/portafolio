import { Outlet } from 'react-router-dom'
import { navItems } from './navItems';
import LayoutToast from '../../layout/LayoutToast';
import Header from '../../component/header/Header';

const Api = () => {
  return (
    <LayoutToast>
      <Header 
        navItems={navItems}
        withNavLink={true}
      />
      <Outlet />
    </LayoutToast>
  )
}

export default Api