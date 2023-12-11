import { useEffect, useRef, useState } from 'react'
import _ from 'lodash'

export const useNavScroll = () => {
  const [navIsActive, setNavIsActive] = useState<boolean>(true)
  const lastTopRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const top = document.body.getBoundingClientRect().top

      top >= lastTopRef.current 
        ? setNavIsActive(true) 
        : setNavIsActive(false)  

      lastTopRef.current = top

    }, 200)
    
    window.addEventListener('scroll', handleScroll)    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      handleScroll.cancel()
    }
  }, [])

  return {
    navIsActive
  }
}

