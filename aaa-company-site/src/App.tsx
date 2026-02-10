import './App.css';

import Home from './pages/Home.tsx';
import Header from './pages/Header.tsx';
import About from './pages/Featured.tsx';
import Services from './pages/Services.tsx';
import CallToAction from './pages/CallToAction.tsx';
import Contact from './pages/Contact.tsx';

function App() {
    return (
      <>
        <div className="relative" id="container">
          <Header />
          <Home />
          <About />
          <Services />
          <CallToAction />
          <Contact />
        </div>
      </>
    )
}

export default App
