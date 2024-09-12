import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import Contextprovider from './context/login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

     <NextUIProvider>
     <Contextprovider>
    <App/>
    </Contextprovider>
    </NextUIProvider>

  </StrictMode>,
)
