import { useState } from 'react'
import style from './loadingImage.module.css'

interface Props {
  src: string
  alt: string
  className?: string
}

const LoadingImage: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  const handleImgLoad = () => {
    setIsLoading(false)
  }

  return (    
    <>      
      {
        isLoading && <div className={style['loading']} />
      }

      <img
        {...props}
        hidden={isLoading}        
        onLoad={handleImgLoad}
      />  
    </>
  )
}

export default LoadingImage