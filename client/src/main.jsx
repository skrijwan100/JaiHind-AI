import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkBackground from './components/DarkBackground';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DarkBackground> */}
      
    <App />
    {/* </DarkBackground> */}
  </StrictMode>,
)
