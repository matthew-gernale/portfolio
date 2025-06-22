
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { AboutSection } from './pages/AboutSection'
import { SkillSection } from './pages/SkillSection'
import { ProjectSection } from './pages/ProjectSection'


function App() {
  return (
      <div className="flex flex-col">
        <LandingPage />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
    </div>
  )
}

export default App
