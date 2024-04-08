import { navItems } from './navItems'
import { Outlet } from 'react-router-dom'
import Header from '../../component/header/Header'
import LayoutToast from '../../layout/LayoutToast'

const HomePage = () => {  
  return (
    <LayoutToast>
      <Header 
        seeDevMode={true} 
        navItems={navItems} 
      />
      <Outlet />    
    </LayoutToast>
  )
}

export default HomePage