import { useState } from 'react'

interface SkillsList {
  title: string;
  data: string[];
  id: string
}

export const useSlider = (data: SkillsList[]) => {
  const [list, setList] = useState([...data])

  const getDecrease = () => {
    const newList = [...list]
    const firstItem = newList.shift() 

    if (!firstItem) return

    newList.push(firstItem)
    setList(newList)
  }

  const getIncrease = () => {
    const newList = [...list]
    const lastItem = newList.pop()

    if (!lastItem) return

    newList.unshift(lastItem)
    setList(newList)
  }

  return {
    getIncrease,
    getDecrease,
    newList: list
  }
}