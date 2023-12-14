import { useState } from 'react'
import style from './loadingImage.module.css'

interface Props {
  src: string
  alt: string
  classNameImg?: string
  classNameContainer?: string
}

const LoadingImage: React.FC<Props> = ({classNameContainer, classNameImg, ...props}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  const handleImgLoad = () => {
    setIsLoading(false)
  }

  return (    
    <div className={classNameContainer ?? ''} >      
      {
        isLoading && <div className={style['loading']} />
      }

      <img
        {...props}
        className={classNameImg ?? ''}
        hidden={isLoading}        
        onLoad={handleImgLoad}
      />  
    </div>
  )
}

export default LoadingImage