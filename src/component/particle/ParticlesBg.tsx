import { useCallback } from 'react';
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles';
import type { Engine} from 'tsparticles-engine'
import particleOption1 from './particles1.json'
import particleOption2 from './particles2.json'
import styles from './particlesBg.module.css'

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
          ? particleOption1
          : particleOption2
      }
    />
  )
}

export default ParticlesBg