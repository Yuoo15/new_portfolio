import './App.css'
import Splash from './components/splash/splash'
import Project_pack from './module/project_pack/project_pack'
import Projects from './components/projects/projects'
import About_me from './components/about_me/about_me'
import Footer from './components/footer/footer'
function App() {

  return (
    <>
    <div className='app-container'>
      <Splash />
      <Projects />
      <About_me />
    </div>
    <Footer />
    </>
  )
}

export default App
