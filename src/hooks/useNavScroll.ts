import { useEffect, useState } from 'react'

export const useNavScroll = (elementId: string) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.getElementById(elementId)

      if (contactElement) {
        const top = contactElement.getBoundingClientRect().top

        setIsActive(top < window.innerHeight / 2)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  },[elementId])

  return {
    isActive
  }
}

