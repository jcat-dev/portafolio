import { useCallback } from 'react';
import { loadFull } from 'tsparticles'
import { getParticles, getParticlesWithLink } from './particles';
import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles';

interface Props {
  id: string
  option: 'default' | 'particlesWithLink'
  fullScreen: boolean
  backgroundColor: string
  containerClassName?: string
}

const ParticlesBg: React.FC<Props> = ({option, id, fullScreen, backgroundColor, containerClassName}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles    
      id={id}
      className={containerClassName ?? ''}
      init={particlesInit}
      options={
        option === 'default'
          ? getParticles(fullScreen, backgroundColor)
          : getParticlesWithLink(fullScreen, backgroundColor)
      }
    />
  )
}

export default ParticlesBg