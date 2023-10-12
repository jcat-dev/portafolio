import { useNavScroll } from '../../hooks/useNavScroll'

interface Props {
  href: string
  title: string
}

const Item: React.FC<Props> = ({href, title}) => {
  const {
    isActive
  } = useNavScroll(title.toLowerCase())
  
  return (
    <li className='item' 
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