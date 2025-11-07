import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeadLineContext from './context/HeadLineContext.jsx'

createRoot(document.getElementById('root')).render(
  <HeadLineContext>
    <App />
  </HeadLineContext>
)
