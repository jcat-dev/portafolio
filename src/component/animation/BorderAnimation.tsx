import styles from './borderAnimation.module.css'

interface Props {
  topColor: string
  rightColor: string
  bottomColor: string
  leftColor: string
  className?: string
}

const BorderAnimation: React.FC<Props> = ({className, ...props}) => {
  return (
    <>
      <div 
        className={`${styles['top']} ${className ?? ''}`} 
        style={
          {backgroundImage: `linear-gradient(to right, transparent 50%, ${props.topColor})`}
        }
      />

      <div 
        className={`${styles['right']} ${className ?? ''}`} 
        style={
          {backgroundImage: `linear-gradient(to bottom, transparent 50%, ${props.rightColor})`}
        }
      />

      <div 
        className={`${styles['bottom']} ${className ?? ''}`} 
        style={
          {backgroundImage: `linear-gradient(to left, transparent 50%, ${props.bottomColor})`}
        }
      />

      <div 
        className={`${styles['left']} ${className ?? ''}`} 
        style={
          {backgroundImage: `linear-gradient(to top, transparent 50%, ${props.leftColor})`}
        }
      />
    </>
  )
}

export default BorderAnimation