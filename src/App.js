import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import Logo from './routes/Logo'
import Colours from './routes/Colours'
import Typography from './routes/Typography'
import Symbols from './routes/Symbols'

import MenuBar from './components/MenuBar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="logo" element={<Logo />} />
          <Route path="colours" element={<Colours />} />
          <Route path="typography" element={<Typography />} />
          <Route path="symbols" element={<Symbols />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
