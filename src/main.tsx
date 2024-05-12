import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import VideoContext from './Context'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <VideoContext>
      <App />      
    </VideoContext>

  </React.StrictMode>,
)
