import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import Header from './Components/Header'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    
  </React.StrictMode>,
)
