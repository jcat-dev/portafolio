import './card.css'

interface Props {
  title: string
  skillsList: string[]
  index: number
}

const Card: React.FC<Props> = ({skillsList, title, index}) => {
  return (
    <div 
      className={
        index === 1 
          ? 'card card--active'
          : 'card'
      }
    >
      <h3 className="card-title" >{title}</h3>
      
      <ul className="card__list">
        {
          skillsList.map((value, index) => (
            <li 
              key={index} 
              className="card__list-item"
            >
              {value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Card