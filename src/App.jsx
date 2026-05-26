import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Roles from './components/Roles';
import Benefits from './components/Benefits';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Roles />
      <Benefits />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
