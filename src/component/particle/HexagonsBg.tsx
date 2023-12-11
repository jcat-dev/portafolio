import Particles from 'react-tsparticles'
import hexagonsOption from './hexagons.json'
import React, { useEffect } from 'react'
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { tsParticles } from 'tsparticles-engine';
import styles from './particlesBg.module.css'

interface Props {
  id: string
  className?: string
}

const HexagonsBg: React.FC<Props> = ({id, className}) => {
  useEffect(() => {
    const loadPolygon = async () => {
      await loadPolygonPath(tsParticles);
    }

    loadPolygon()
  }, [])
  
  return (
    <Particles
      id={id}
      className={`${styles['particles']} ${className ?? ''}`}
      options={hexagonsOption}
    />
  )
}

export default HexagonsBg