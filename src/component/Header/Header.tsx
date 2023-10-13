import { itemsList } from './itemsList'
import { useState } from 'react'
import Item from './Item'
import menuIcon from '../../assets/icon-menu.svg'
import closeIcon from '../../assets/icon-close.svg'
import './index.css'


const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false)
  
  const handleClickMenu = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <header className='header-container' >
      <nav className={
        menuIsActive 
          ? 'nav nav-mobil'
          : 'nav'
      } >
        <p
          className='nav-title' 
          hidden={menuIsActive} 
        >
          Jorge Emanuel Castillo
        </p>

        <div className='menu' >
          <img 
            className='menu-icon'   
            src={menuIcon} 
            alt="menu icon" 
            onClick={handleClickMenu}
            hidden={menuIsActive}      
          />
        
          <img 
            className="menu-close"
            src={closeIcon}
            alt='close icon'
            onClick={handleClickMenu}
            hidden={!menuIsActive}      
          />
        </div>       
    
        <ul 
          className='nav-list' 
          hidden={!menuIsActive} 
        >
          {
            itemsList.map((value, index) => (
              <Item 
                key={index}
                href={value.href}
                title={value.value}
                onClick={handleClickMenu}
              />
            ))
          }
        </ul>       
      </nav>
    </header>
  )
}

export default Header