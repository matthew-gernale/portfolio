
import './App.css'
import { useState } from 'react'

import { LandingPage } from './pages/LandingPage'
import { AboutSection } from './pages/AboutSection'
import { ProjectSection } from './pages/ProjectSection'
import { FooterSection } from './pages/FooterSection'
import ChatDrawer from './components/ChatDrawer'

import Dock from './components/Dock'


function App() {

    const navigate = (pageId) => {
        const currPage = document.getElementById(pageId);
        currPage.scrollIntoView({ behavior: 'smooth' });
    }

    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChatBox = () => setIsChatOpen(!isChatOpen);

    const items = [
        { icon: <i className="fi fi-rr-house-chimney"></i>, label: 'Home', onClick: () => navigate('landingPage') },
        { icon: <i className="fi fi-rr-circle-user"></i>, label: 'About', onClick: () => navigate('aboutPage') },
        { icon: <i className="fi fi-rr-folder"></i>, label: 'Projects', onClick: () => navigate('projectPage') },
        { icon: <i class="fi fi-rr-envelope"></i>, label: 'Message', onClick: toggleChatBox },
    ];


    return (
      
        <>
            <ChatDrawer isOpen={isChatOpen} onClose={toggleChatBox} />
            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
            <div className="flex flex-col">
                <LandingPage />
                <AboutSection />
                <ProjectSection />
                <FooterSection />
            </div>
        </>
  )
}

export default App
