import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import VideoContext from './Context'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <BrowserRouter basename='/YouTube-React'>
    <VideoContext>
      <App />      
    </VideoContext>
  </BrowserRouter>
  ,
)
