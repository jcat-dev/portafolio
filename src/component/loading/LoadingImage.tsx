import { ImgHTMLAttributes, useState } from 'react'
import style from './loadingImage.module.css'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string

  classNameContainer?: string
  classNameImg?: string
  classNameLoading?: string
}

const LoadingImage: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {
    classNameContainer,
    classNameImg,
    classNameLoading,
    ...rest
  } = props
  
  const handleImgLoad = () => {
    setIsLoading(false)
  }

  return (    
    <div className={classNameContainer ?? ''} >      
      {
        isLoading && <div className={`${style['loading']} ${classNameLoading ?? ''}`} />
      }

      <img
        {...rest}
        className={classNameImg ?? ''}
        hidden={isLoading}        
        onLoad={handleImgLoad}
      />  
    </div>
  )
}

export default LoadingImage