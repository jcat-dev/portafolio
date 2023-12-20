import { useCallback } from 'react';
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles';
import styles from './particlesBg.module.css'
import { particleCircle, particleLinks } from './particles';

interface Props {
  id: string
  option: 'default' | 'amongUs'
  className?: string
}

const ParticlesBg: React.FC<Props> = ({option, id, className}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles    
      id={id}
      className={`${styles['particles']} ${className ?? ''}`}
      init={particlesInit}
      options={
        option === 'default'
          ? particleCircle
          : particleLinks
      }
    />
  )
}

export default ParticlesBg