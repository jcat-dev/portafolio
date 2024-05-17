import { useLoaderData } from 'react-router-dom'
import { ProfileWithId } from '../../../Types/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Anchor from '../../../component/button/Anchor'
import styles from './homeProfilePage.module.css'
import ParticlesBg from '../../../component/particle/ParticlesBg'

const HomeProfilePage: React.FC = () => {
  const profile = useLoaderData() as ProfileWithId | null

  return (
    <main>
      <ParticlesBg 
        id='Profile'
        option='particlesWithLink'
        backgroundColor='#f6f6f6'
        fullScreen={true} 
      />  

      <div className={styles['profile']} >
        <h1 className={styles['profile-title']} >
          {profile?.title}
        </h1>

        <p className={styles['profile-fullname']}>
          {profile?.fullName}
        </p>
        
        <h2 className={styles['profile-stack']} >
          {profile?.stackTitle}
        </h2>

        <p className={styles['profile-description']} >
          {profile?.description}
        </p>      

        <div className={styles['profile-links']} >
          <Anchor
            href={import.meta.env.VITE_CV_URL}
            target='_blank'
            className={styles['cv-link']}
          >
            Descargar CV

            <FontAwesomeIcon 
              icon={faFilePdf} 
              className={styles['cv-link-icon']}
              size='xl'
            />
          </Anchor>    

          <Anchor
            href={import.meta.env.VITE_GITHUB_URL}
            target='_blank'
            className={styles['link']}
          >
            GitHub

            <FontAwesomeIcon 
              icon={faGithub}
              className={styles['link-icon']}
              size='xl'
            />
          </Anchor>  

          <Anchor
            href={import.meta.env.VITE_LINKEDIN_URL}
            target='_blank'
            className={styles['link']}
          >
            LinkedIn

            <FontAwesomeIcon 
              icon={faLinkedinIn}
              className={styles['link-icon']}
              size='xl'
            />
          </Anchor>     
        </div>
      </div>      
    </main>
  )
}

export default HomeProfilePage