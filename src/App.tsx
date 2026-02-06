import { useState } from 'react';
import { Hero } from './components/ui/Hero';
import { About } from './components/ui/About';
import { Experience } from './components/ui/Experience';
import { Education } from './components/ui/Education';
import { Skills } from './components/ui/Skills';
import { Portfolio } from './components/ui/Project';
import { Blog } from './components/ui/Blog';
import { Services } from './components/ui/Services';
import { Contact } from './components/ui/Contact';

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Portfolio />
      <Blog />
      <Services />
      <Contact />
    </div>
  );
}
