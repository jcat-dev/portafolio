import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavItems } from '../../Types/NavItems'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavScroll } from '../../hooks/useNavScroll'
import Button from '../button/Button'
import styles from './css/header.module.css'
import NavItem from './NavItem'

interface Props {
  navItems: NavItems[]
  withNavLink: boolean
}

const Header: React.FC<Props> = ({withNavLink, ...props}) => {
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
          className={styles['nav-title']}
          hidden={menuIsActive} 
        >
          Jorge Emanuel Castillo
        </p>            
    
        <ul 
          className={styles['nav-list']}
          hidden={!menuIsActive} 
        >
          {
            props.navItems.map((value, index) => (
              <NavItem 
                key={index}
                link={value.link}
                title={value.title}
                withNavLink={withNavLink}
                handleClick={handleMenuClick}
              />
            ))
          }

          <li className={styles['nav-list__item']} >
            {
              withNavLink
                ? <Link to={'/'} className={styles['nav-list__item-link']} >HOME</Link>
                : <Link to={'/api'} className={styles['nav-list__item-link']} >DEV</Link>
            }            
          </li> 
        </ul>     
        
        <div className={styles['menu']} >        
          <Button
            type='button'
            className={styles['menu-btn']}  
            aria-label="menu icon" 
            icon={true}
            hidden={menuIsActive} 
            onClick={handleMenuClick}
          >
            <FontAwesomeIcon 
              icon={faBars}    
              size='xl'    
              className={styles['menu-btn__icon']}       
            />   
          </Button>
          
          <Button
            type='button'
            className={styles['menu-close']}
            aria-label='close icon'
            icon={true}
            hidden={!menuIsActive}  
            onClick={handleMenuClick}
          >
            <FontAwesomeIcon 
              icon={faXmark} 
              size='xl'
              className={styles['menu-close__icon']}
            />
          </Button>        
        </div>  
      </nav>
    </header>
  )
}

export default Header