import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Waves from './components/Waves'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="relative">
            <Waves
                className="fixed z-[-1]"
                lineColor="#CECECE"
                backgroundColor="rgba(255, 255, 255, 0.3)"
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
            <App />
        </div>
    </StrictMode>,
)
