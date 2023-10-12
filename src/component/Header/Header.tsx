import { itemsList } from './itemsList'
import Item from './Item'
import './index.css'

const Header = () => {
  return (
    <header className='header-container' >
      <nav className='nav' >
        <ul className='list' >
          {
            itemsList.map((value, index) => (
              <Item 
                href={value.href}
                title={value.value}
                key={index}
              />
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header