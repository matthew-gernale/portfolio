import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Waves from './components/Waves'
import Dock from './components/Dock'

const items = [
    { icon: <i className="fi fi-rr-house-chimney"></i>, label: 'Home', onClick: () => alert('Home!') },
    { icon: <i className="fi fi-rr-circle-user"></i>, label: 'About', onClick: () => alert('About!') },
    { icon: <i className="fi fi-rr-folder"></i>, label: 'Projects', onClick: () => alert('Archive!') },
    { icon: <i className="fi fi-rr-square-phone-hangup"></i>, label: 'Contact', onClick: () => alert('Settings!') },
];

createRoot(document.getElementById('root')).render(
    <StrictMode>

        <div className="relative">
            <Waves
                className="fixed z-[-1]"
                lineColor="#CECECE"
                backgroundColor="rgba(255, 255, 255, 0.2)"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
            />
            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
            <App />
        </div>
    </StrictMode>,
)
