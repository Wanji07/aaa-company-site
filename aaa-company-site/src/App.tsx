import './App.css';

import Home from './pages/Home.tsx';
import Header from './pages/Header.tsx';

function App() {
    return (
      <>
        <div className="container">
            <Header />
            <Home />
        </div>
      </>
    )
}

export default App
