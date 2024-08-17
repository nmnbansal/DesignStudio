import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import APIContext from './context/APIContext.jsx'

createRoot(document.getElementById('root')).render(
    <APIContext>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </APIContext>
)
