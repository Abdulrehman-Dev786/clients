import React from 'react'

function Hero() {
    

    return (
        <>
            {/* first section */}
  <section id='hero'>
    <div className="hero pt-20 grid bg-gradient-to-b from-slate-100 to-sky-200 md:grid-cols-1 lg:grid-cols-2  ">
      <div>
        <div className='text-start pt-28 ms-9 md:ms-36'>
          <h1 className='text-5xl  text-start font-bold'>HI,I'm Abdul Rehman- <br />Web Developer</h1>
          <p className='text-2xl mt-3 '>I build modern websites using React, <br />Tailwind & more.</p><br />
          <a href="/public/Resume.pdf" className='p-2  bg-gradient-to-r from-blue-200 via-blue-300 hover:text-blue-700'>View Resume</a>
        </div>
      </div>
      <div>
        <div>
          <div className="img flex items-center justify-center  pt-20 hover:animate-pulse" ><img className=' h-80  ' src="./public/hero-removebg-preview.png" alt="" /></div>
        </div>
      </div>
    </div>
  
  </section>

        </>
    )
}
export default Hero;