import React from 'react'
import { useState } from 'react';

export function Contact(props) {
    const[name,setname] = useState("")

    return (
        <>
            <div className=' bg-blue-100 md:pt-3  md:pb-14' >
                <div className='container grid grid-cols-1  sm:grid-cols-2'>
                    <div className='flex flex-col items-center justify-center' >
                        <h3 className='flex justify-center text-blue-800 font-bold underline text-2xl mt-6'>contact with smart</h3>
                        <h2>(+92)3438246718</h2>
                        <h2>Writeforpeoplehub@gmail.com</h2>
                        <img className='w-40 h-40 mt-5' src="qr.png" alt="" />
                    </div>
                    <div className=' p-9 h-96 justify-center flex text-white text-start border-blue-200 j'>
                        <div className=' w-72 '>
                            <h1 className='flex justify-center text-blue-800 font-bold underline text-2xl mb-3'>let's keep in touch</h1>
                        <form   action="#">
                            <label className='text-blue-500 font-bold' htmlFor="">Enter_Name</label><br />
                            <input className='w-72 mt-2 mb-2 text-black ps-2' value={name}  onChange={(e)=>setname(e.target.value)} placeholder='Enter your name' type="text" /><br />
                            <label  className='text-blue-500 font-bold'   htmlFor="">Enter_email </label><br />
                            <input className='w-72 mt-2 mb-2 ps-2' placeholder='@gmail.com' type="mail" /><br />
                            <label  className='text-blue-500 font-bold'  htmlFor="">Enter_massege</label><br />
                            <textarea className='w-72 mt-2 ps-2 p-2 ' placeholder='Hi my name is Abdul Rehman' name="" id=""></textarea><br /><br />
                            <a href="" className='flex justify-center  bg-gradient-to-r from-blue-200 via-blue-300  shadow-transparent  p-2 font-bold'>submit</a>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 export default Contact;