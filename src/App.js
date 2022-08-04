import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
