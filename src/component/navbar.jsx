
import React, { useState } from 'react'


const Navbar = () => {

    const[closeManu,openManu]=useState(false)

    function showManu(){
      openManu(!closeManu)
    }
  
    return(
        <>
         {/* Navbar  */}
         <section >
         <nav>
      <div className=' md:fixed w-full h-22 bg-blue-100  shadow-lg z-50 '>
      <div className='flex flex-wrap justify-between p-5 lg:ps-36 lg:pe-36 ps-10  '>
        <a className=' text-2xl  font-extrabold bg-gradient-to-r from-blue-100 to-black ' href="">CODE<span className='text-blue-300 '>NCE</span></a>
        <ul className=' hidden  md:flex space-x-7 font-serif justify-center items-center'>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#hero">HOME</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#about">ABOUT</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#skills">SKILLS</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#project">PROJECT</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#contact">CONTACT</a> </li>
        </ul>
        <div onClick={showManu} className='md:hidden items-center text-2xl font-extrabold cursor-pointer'>&#9776;</div>
      </div>
      </div>
    </nav>
  {/* for mobile devices */ }
    {closeManu && (
      <div id="formobile" className='md:hidden bg-slate-200'>
    <ul className= 'md:hidden space-y-3 font-serif justify-center text-center items-center'>
        <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#hero">HOME</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#about">ABOUT</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#skills">SKILLS</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#project">PROJECT</a> </li>
          <li><a className='hover:text-blue-500 hover:border-t-2 border-blue-600  pt-2' href="#contact">CONTACT</a> </li>
        </ul>
    </div>
  )}
        
        </section>  
        </>
    )


} 
export default Navbar