import { Outlet } from 'react-router-dom'
import { navItems } from './navItems';
import LayoutToast from '../../layout/LayoutToast';
import Header from '../../component/header/Header';

const ApiPage = () => {
  return (
    <LayoutToast>
      <Header 
        navItems={navItems}
        seeDevMode={false}
      />
      <Outlet />
    </LayoutToast>
  )
}

export default ApiPage