import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavItems } from '../../Types/NavItems'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavScroll } from '../../hooks/useNavScroll'
import styles from './header.module.css'
import LinkButton from '../button/LinkButton'

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
          className={styles['nav__list']}
          hidden={!menuIsActive} 
        >
          {
            navItems.map((value, index) => (
              <li 
                className={styles['nav__list-item']}
                onClick={handleMenuClick} 
                key={index}
              >
                <NavLink
                  className={({isActive}) => 
                    isActive
                      ? `${styles['link']} ${styles['link--active']}`
                      : styles['link']
                  }
                  to={value.link}
                >
                  {value.title}
                </NavLink>     
              </li>
            ))
          }

          <li className={`${styles['nav__list-item']} ${styles['nav__list-item--ma']}`} >
            {
              seeDevMode
                ? <LinkButton to={'/api'} className={styles['link-mode']} >DEV</LinkButton>
                : <LinkButton to={'/'} className={styles['link-mode']} >INICIO</LinkButton>
            }            
          </li> 
        </ul>     
        
        <button
          type='button'
          className={styles['nav-mobil__menu-btn']}  
          aria-label="menu icon" 
          hidden={menuIsActive} 
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon 
            icon={faBars}    
            size='xl'    
          />   
        </button>
          
        <button
          type='button'
          className={styles['nav-mobil__close-btn']}  
          aria-label='close icon'
          hidden={!menuIsActive}  
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon 
            icon={faXmark} 
            size='xl'
          />
        </button>        
      </nav>
    </header>
  )
}

export default Header