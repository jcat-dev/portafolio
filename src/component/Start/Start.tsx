import { profile } from './profile'
import './index.css'

const Start = () => {
  return (
    <section 
      id='inicio' 
      className='start' 
    >
      <div className='start-container' >
        <h1 className='title' >
          {
            profile.title.split(' ').map((value) => (
              <>
                {value}
                <br />
              </>
            ))
          }
        </h1>

        <p className='text' >
          {profile.description}
        </p>
      
        <img 
          className='photo'
          src={profile.photoUrl} 
          alt="photo" 
        />
      </div>
    </section>
  )
}

export default Start