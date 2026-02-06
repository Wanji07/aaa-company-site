import './App.css';

import Home from './pages/Home.tsx';
import Header from './pages/Header.tsx';
import About from './pages/Featured.tsx';

function App() {
    return (
      <>
        <div className="relative" id="container">
          <Header />
          <Home />
          <About />
        </div>
      </>
    )
}

export default App
