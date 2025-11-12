import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/0 to-slate-900/0 pointer-events-none" />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      
      {/* Floating tech icons background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-cyan-500/10 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-violet-500/10 rounded-full animate-pulse delay-3000" />
      </div>
    </div>
  );
}

export default App;