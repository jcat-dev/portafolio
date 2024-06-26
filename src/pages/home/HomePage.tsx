import { Outlet } from 'react-router-dom'
import { navHome } from '../../utils/navItems'
import Header from '../../components/header/Header'

const HomePage = () => {  
  return (
    <>
      <Header 
        navItems={navHome}
      />
      <Outlet />    
    </>
  )
}

export default HomePage