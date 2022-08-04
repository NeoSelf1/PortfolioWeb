import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Timeline from './routes/Timeline'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
