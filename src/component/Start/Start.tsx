import { profile } from './profile'
import './index.css'

const Start = () => {
  return (
    <section 
      id='inicio' 
      className='start' 
    >
      <div className='profile-container' >
        <img 
          className='profile-photo'
          src={profile.photoUrl} 
          alt="photo" 
        />
        
        <h1 className='profile-title' >
          {
            profile.title.split(' ').map((value) => (
              <>
                {value}
                <br />
              </>
            ))
          }
        </h1>

        <p className='profile-description' >
          {profile.description}
        </p>        
      </div>
    </section>
  )
}

export default Start