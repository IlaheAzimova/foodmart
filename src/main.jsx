import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import DataContext from './Components/context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </DataContext>

)
