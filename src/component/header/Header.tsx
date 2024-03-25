import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavItems } from '../../Types/NavItems'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavScroll } from '../../hooks/useNavScroll'
import Button from '../button/Button'
import styles from './header.module.css'

interface Props {
  seeDevMode: boolean
  navItems: NavItems[]
}

const Header: React.FC<Props> = ({navItems, seeDevMode}) => {
  const { navIsActive } = useNavScroll()
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false)
  
  const handleMenuClick = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <header className={styles['container']} >
      <nav 
        className={
          navIsActive 
            ? menuIsActive 
              ? `${styles['nav']} ${styles['nav-mobil']}` 
              : styles['nav']
            : `${styles['hidden']} `
        }      
      >
        <p
          className={styles['nav-mobil__title']}
          hidden={menuIsActive} 
        >
          {
            import.meta.env.VITE_FULLNAME
          }
        </p>            
    
        <ul 
          className={styles['nav-list']}
          hidden={!menuIsActive} 
        >
          {
            navItems.map((value, index) => (
              <li 
                className={styles['nav-list__item']}
                onClick={handleMenuClick} 
                key={index}
              >
                <NavLink
                  className={({isActive}) => 
                    isActive
                      ? `${styles['nav-list__item-link']} ${styles['nav-list__item-link--active']}`
                      : styles['nav-list__item-link']
                  }
                  to={value.link}
                >
                  {value.title}
                </NavLink>     
              </li>
            ))
          }

          <li className={`${styles['nav-list__item']} ${styles['nav-list__item--ma']}`} >
            {
              seeDevMode
                ? <Link to={'/api'} className={styles['nav-list__item-link']} >DEV</Link>
                : <Link to={'/'} className={styles['nav-list__item-link']} >HOME</Link>
            }            
          </li> 
        </ul>     
        
        <Button
          type='button'
          className={styles['menu-mobil']}  
          aria-label="menu icon" 
          icon={true}
          hidden={menuIsActive} 
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon 
            icon={faBars}    
            size='xl'    
            className={styles['menu-mobil__icon']}       
          />   
        </Button>
          
        <Button
          type='button'
          className={styles['menu-mobil-close']}
          aria-label='close icon'
          icon={true}
          hidden={!menuIsActive}  
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon 
            icon={faXmark} 
            size='xl'
            className={styles['menu-mobil-close__icon']}
          />
        </Button>        
      </nav>
    </header>
  )
}

export default Header