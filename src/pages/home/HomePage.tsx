import { navItems } from './navItems'
import { Outlet } from 'react-router-dom'
import Header from '../../component/header/Header'

const HomePage = () => {  
  return (
    <>
      <Header 
        seeDevMode={true} 
        navItems={navItems} 
      />
      <Outlet />    
    </>
  )
}

export default HomePage