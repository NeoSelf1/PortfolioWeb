import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import WebFont from 'webfontloader'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

WebFont.load({
  google: {
    families: ['Poppins', 'Spoqa Han Sans Neo:100,400', 'Nexen_B:400'],
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
