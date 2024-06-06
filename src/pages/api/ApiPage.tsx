import { Outlet } from 'react-router-dom'
import { navDev } from '../../utils/navItems';
import Header from '../../components/header/Header';

const ApiPage = () => {
  return (
    <>
      <Header 
        navItems={navDev}        
      />
      <Outlet />
    </>
  )
}

export default ApiPage