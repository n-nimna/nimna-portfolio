import React from 'react';
import About from './main/About/About';
import Background from './main/Background';
import Navbar from './main//Nav/Navbar';
import Hero from './main/Hero/Hero';
import Service from './main/Service/Service';
import Skills from './main/Skills/Skills';
import Projects from './main/Projects/Projects';
import Contact from './main/Contact/Contact';
import Footer from './main/Footer/Footer';




/*hi*/
function App() {
  return (
    <div className="relative">
      <Background /> {/* Background of components with animation */}
      <Navbar />
      <main className="mt-16">
      <Hero/>
      <About/>
      <Service/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </main>
    </div>
  )
}

export default App;
