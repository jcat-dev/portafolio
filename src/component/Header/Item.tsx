import { useNavScroll } from '../../hooks/useNavScroll'
import './item.css'

interface Props {
  href: string
  title: string
  onClick: () => void
}

const Item: React.FC<Props> = ({href, title, onClick}) => {
  const {
    isActive
  } = useNavScroll(title.toLowerCase())

  return (
    <li 
      className='item'
      onClick={onClick} 
    >
      <a 
        className='item__link'
        href={href} 
      >
        {title}
      </a>

      <div className= {
        isActive 
          ? 'item__progress-bar item__progress-bar--active'
          : 'item__progress-bar'
      }
      />
    </li>
  )
}

export default Item