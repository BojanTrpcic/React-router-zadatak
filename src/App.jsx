import './App.css'
import { Routes, Route, Link } from "react-router-dom" 
import Juhe from './pages/Juhe'
import Talianete from './pages/Talianete'
import Haringe from './pages/Haringe'
import NotFound from './pages/NotFound'

function App() {
 

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Juhe</Link>
            </li>
            <li>
              <Link to="/italjianete">Talijanete iz Švedske</Link>
            </li>
            <li>
              <Link to="/mirisne-haringe">Ukiseljena Haringa</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Juhe/>}/>
        <Route path="italjianete" element={<Talianete/>}/>
        <Route path="mirisne-haringe" element={<Haringe/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
