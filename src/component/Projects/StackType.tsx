import styles from './stackType.module.css'

interface Props {
  title: string
  list: string[]
}

const StackType: React.FC<Props> = ({ title, list }) => {
  if (list.length === 0) {
    return <></>
  }
  
  return (
    <ul className={styles['stack-type']} >
      <span className={styles['stack-type__title']} >
        {title}:
      </span>
      
      {
        list.map((value, index) => (
          <li
            key={index}
            className={styles['stack-type__item']}
          >
            {value}
          </li>
        ))
      }
    </ul>
  )
}

export default StackType