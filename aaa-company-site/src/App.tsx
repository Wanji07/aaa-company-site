import './App.css';

import Home from './pages/Home.tsx';
import Header from './pages/Header.tsx';
import About from './pages/Featured.tsx';
import ServicesMobile from './MobileServicesCard.tsx';
import CallToAction from './pages/CallToAction.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './pages/Footer.tsx';


function App() {
    

    return (
      <>
        <div className="relative" id="container">
          <Header />
          <Home />
          <About />
          <ServicesMobile />
          <CallToAction />
          <Contact />
          <Footer />
        </div>
      </>
    )
}

export default App
