import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/About';
import Roles from './components/Roles';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Roles />
      <Process />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
