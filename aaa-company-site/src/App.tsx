import './App.css';
import Main from './pages/Main.tsx'
import Projects from './pages/Projects.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </>
    )
}

export default App
