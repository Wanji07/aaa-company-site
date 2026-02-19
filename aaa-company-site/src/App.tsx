import './App.css';
import Main from './pages/Main.tsx'
import Projects from './pages/Projects.tsx';
import About from './pages/About.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    )
}

export default App
