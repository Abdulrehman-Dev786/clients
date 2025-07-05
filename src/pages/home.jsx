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

// function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
//         <div className="text-6xl mb-4">🚧</div>
//         <div className="text-4xl font-bold text-white mb-2">Sorry! Site Under Maintenance</div>
//         <div className="text-xl text-white">Some features might not work properly right now.<br/>Please wait while we prepare something amazing for you! 🌟</div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Project />
//       <Hireme />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. 3 seconds)
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
        <div>
          {/* Your main website starts here */}
          
        </div>
      )}
       <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Hireme />
      <Contact />
      <Footer />
    </>
  );
}



export default Home;
