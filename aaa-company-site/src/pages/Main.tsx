import Home from './Home.tsx';
import Header from './Header.tsx';
import About from './Featured.tsx';
import ServicesMobile from '../MobileServicesCard.tsx';
import CallToAction from './CallToAction.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './Services.tsx';

function Main() {
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

    return(
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

export default Main