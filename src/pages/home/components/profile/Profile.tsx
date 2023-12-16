import { ProfileWithId } from '../../../../Types/Profile'
import LoadingImage from '../../../../component/loading/LoadingImage'
import styles from './profile.module.css'

interface Props {
  profile?: ProfileWithId
}

const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <section 
      id='inicio' 
      className={styles['profile']} 
    >
      <div className={styles['container']} >
        <h1 className={styles['profile-title']} >
          { profile?.stackTitle}
        </h1>

        <h2 className={styles['profile-fullname']}>
          {profile?.fullName}
        </h2>

        <LoadingImage 
          classNameContainer={styles['profile__photo-container']}
          classNameImg={styles['profile__photo']}
          src={profile?.photoUrl ?? ''} 
          alt="imagen del perfil" 
        />

        <p className={styles['profile-description']} >
          {profile?.description}
        </p>        
      </div>
    </section>
  )
}

export default Profile