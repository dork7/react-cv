import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ParticleBG from './components/particlebg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParticleBG />
    <App />

  </React.StrictMode>,
)
