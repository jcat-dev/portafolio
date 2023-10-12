import Contact from '../component/Contact/Contact'
import Projects from '../component/Projects/Projects'
import Skills from '../component/Skills/Skills'
import Start from '../component/Start/Start'
import './index.css'

const Home = () => {
  return (
    <main className="main-container" >
      <Start />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home