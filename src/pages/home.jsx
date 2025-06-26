import React from 'react'
import Navbar from '../component/navbar';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Project from '../component/project';
import Hireme from '../component/hireme';
import Footer from '../component/footer';
import Contact from '../component/contact';

export function Home(props) {
    

    return (
        <>
           <Navbar />
           <Hero/>
           <About/>
           <Skills/>
           <Project/>
           <Hireme/>
            <Contact/>
           <Footer/>
          
           


        </>
    )
}
export default Home;