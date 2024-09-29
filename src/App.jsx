import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css'
import ProjectPage from './Pages/Project/Project.jsx'
function App() {
  const isGithubPages = window.location.hostname === 'siaochi.github.io';
  const basename = isGithubPages ? '/portfolio/' : ''; 
  return (
    <Router basename={basename}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
