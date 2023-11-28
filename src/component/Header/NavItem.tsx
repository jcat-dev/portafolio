import { NavLink } from 'react-router-dom'
import style from './css/navItem.module.css'

interface Props {
  title: string
  link: string
  withNavLink: boolean
  handleClick: () => void
}

const NavItem: React.FC<Props> = ({title, link, withNavLink, handleClick}) => {
  if (withNavLink) {
    return (
      <li 
        className={style['nav__item']}
        onClick={handleClick} 
      >
        <NavLink
          className={({isActive}) => 
            isActive
              ? `${style['nav__item-link']} ${style['nav__item-link--active']}`
              : style['nav__item-link']
          }
          to={link}
        >
          {title}
        </NavLink>     
      </li>
    )
  }

  return (
    <li 
      className={style['nav__item']}
      onClick={handleClick} 
    >
      <a
        className={style['nav__item-link']}
        href={link}
      >
        {title}
      </a>      
    </li>
  )
}

export default NavItem