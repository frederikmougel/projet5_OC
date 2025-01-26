import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      <Footer />
    </StrictMode>
  </BrowserRouter>
)
