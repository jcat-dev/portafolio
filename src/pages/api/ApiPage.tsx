import { Outlet } from 'react-router-dom'
import { navItems } from './navItems';
import Header from '../../component/header/Header';

const ApiPage = () => {
  return (
    <>
      <Header 
        navItems={navItems}
        seeDevMode={false}
      />
      <Outlet />
    </>
  )
}

export default ApiPage