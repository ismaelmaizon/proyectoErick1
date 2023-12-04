import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// 1. import `BrowserRouter` component
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
</BrowserRouter>,
)
