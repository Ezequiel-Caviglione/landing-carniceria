import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMeats from './components/FeaturedMeats';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
      }
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMeats />
        <OurStory />
        <Footer />
      </main>
    </div>
  );
}

export default App;
