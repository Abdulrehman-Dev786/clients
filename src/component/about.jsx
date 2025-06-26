import React from 'react'

function About() {
    

    return (
        <>
        
            
  <section id='about'>
    <div className='bg-gradient-to-b from-sky-200 to-blue-50  pb-20'>
      <h1 className='text-3xl pt-10 font-bold  '> <span className='bg-gradient-to-r from-blue-100 to-black'> About <span className='text-blue-300   '>Me</span></span> </h1>
      <div className='grid grid-cols-1   lg:grid-cols-2'>
      <div className=" hover:animate-pulse flex text-center items-center justify-center"><img  className='pt-9 ' src="./public/section-removebg-preview.png" alt="" /></div>
      <div className=" flex items-center justify-center pt-28 p-5  lg:pe-10  ">
        <div className=' border-4 outline-dotted hover:outline-blue-800 rounded-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] border-white p-7'>
          <h3 className='text-start'>Hi, I’m Abdul Rehman — a passionate Web Developer   with a creative<br /> eye  for design and a strong grip on modern technologies. I build responsive, <br /> user-friendly websites that deliver smooth digital experiences.
Clean code, <br /> pixel-perfect layouts, and performance are always my focus. <br /> Let’s build something great together.</h3>
        </div>
      </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default About;
