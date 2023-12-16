import { navItems } from './navItems'
import { useLoaderData } from 'react-router-dom'
import { ProfileWithId } from '../../Types/Profile'
import Header from '../../component/header/Header'
import LayoutToast from '../../layout/LayoutToast'
import Contact from './components/contact/Contact'
import Projects from './components/project/Projects'
import Skills from './components/skill/Skills'
import Profile from './components/profile/Profile'

const Home = () => {
  const data = useLoaderData() as ProfileWithId[]
  
  return (
    <>
      <Header
        withNavLink={false}
        navItems={navItems}
      />
      
      <main className="main-container" >
        <LayoutToast>            
          <Profile profile={data[0]} />
          <Skills />
          <Projects />
          <Contact />          
        </LayoutToast>              
      </main>
    </>
  )
}

export default Home