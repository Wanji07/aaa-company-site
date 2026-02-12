import './App.css';

import Home from './pages/Home.tsx';
import Header from './pages/Header.tsx';
import About from './pages/Featured.tsx';
import ServicesMobile from './MobileServicesCard.tsx';
import ServicesCard1 from './ServicesCard1.tsx';
import ServicesCard2 from './ServicesCard2.tsx';
import CallToAction from './pages/CallToAction.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './pages/Footer.tsx';
import { useState, useEffect } from 'react'
import Services from './pages/Services.tsx';


function App() {

  const [mobileView, setMobileView] = useState(false);


  const checkMobileView = () => {
    setMobileView(window.innerWidth <= 1440);
  }

  useEffect(() => {

    checkMobileView()

    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    }

  }, []);
    

    return (
      <>
        <div className="relative" id="container">
          <Header />
          <Home />
          <About />
          {mobileView ? <ServicesMobile /> : <Services />}
          <CallToAction />
          <Contact />
          <Footer />
        </div>
      </>
    )
}

export default App
