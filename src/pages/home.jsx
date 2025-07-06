import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Project from '../component/project';
import Hireme from '../component/hireme';
import Footer from '../component/footer';
import Contact from '../component/contact';
import Preloader from '../component/Preloader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Hireme />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;