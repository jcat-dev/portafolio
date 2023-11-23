import Contact from '../../component/Contact/Contact'
import Header from '../../component/Header/Header'
import Projects from './components/project/Projects'
import Skills from '../../component/Skills/Skills'
import Start from '../../component/Start/Start'
import LayoutToast from '../../layout/LayoutToast'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      
      <main className="main-container" >
        <LayoutToast>
          <Start />
          <Skills />
          <Projects />
          <Contact />
        </LayoutToast>      
      </main>
    </>
  )
}

export default Home