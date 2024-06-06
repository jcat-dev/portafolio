import { ImgHTMLAttributes, useState } from 'react'
import LoadingBox from './LoadingBox'
import styles from './css/loadingImage.module.css'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  loadingClassName: string
  imgClassName: string
}

const LoadingImage: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {
    loadingClassName,
    imgClassName,
    src,
    alt,
    ...rest
  } = props

  const handleImgLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      {
        isLoading && <LoadingBox loadingClassName={loadingClassName} />
      } 

      <img
        src={src}
        alt={alt}
        className={`${styles['loading-img']} ${imgClassName}`}
        hidden={isLoading}        
        onLoad={handleImgLoad}  
        {...rest}
      />
    </>
  )
}

export default LoadingImage