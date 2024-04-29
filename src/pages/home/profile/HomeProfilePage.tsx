import { useLoaderData } from 'react-router-dom'
import { ProfileWithId } from '../../../Types/Profile'
import styles from './homeProfilePage.module.css'
import ParticlesBg from '../../../component/particle/ParticlesBg'

const HomeProfilePage: React.FC = () => {
  const profile = useLoaderData() as ProfileWithId | null

  return (
    <main>
      <ParticlesBg 
        id='Profile'
        option='particlesWithLink'
        backgroundColor='#ffffff'
        fullScreen={true} 
      />  

      <div className={styles['profile']} >
        <h1 className={styles['profile-title']} >
          {
            profile?.title
          }
        </h1>

        <p className={styles['profile-fullname']}>
          {
            profile?.fullName
          }
        </p>
        
        <h2 className={styles['profile-stack']} >
          {
            profile?.stackTitle
          }
        </h2>

        <p className={styles['profile-description']} >
          {
            profile?.description
          }
        </p>      
      </div>      
    </main>
  )
}

export default HomeProfilePage