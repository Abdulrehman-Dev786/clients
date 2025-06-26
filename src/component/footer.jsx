import React from 'react'

 function Footer() {
    

    return (
        <>
            <footer id='' className=" text-white h-54   md:h-16 items-center justify-center pt-5 bg-gradient-to-r from-blue-300 to-black  shadow-lg  ">
  <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
   
    <div class="flex flex-col md:flex-row gap-4 text-sm">
      <a href="#hero" class="hover:underline underline-offset-4">Home</a>
      <a href="#project" class="hover:underline underline-offset-4">Projects</a>
      <a href="#hireme" class="hover:underline underline-offset-4">Contact</a>
    </div>
   
    <div class="flex gap-4 text-sm">
  <a href="https://wa.me/qr/FSLP2D3IGJXCJ1" target="_blank" class="hover:text-green-400"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a href="https://www.linkedin.com/in/abdul-rehman-910349296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="hover:text-blue-300"> <i class="fab fa-linkedin"></i> LinkedIn</a>
  <a href="skype:your.skype.id?chat" target="_blank" class="hover:text-blue-300"> <i class="fab fa-skype"></i> Skype</a>
</div>
   
    <div class="text-xs text-center md:text-right">
      © 2025 Abdul Rehman. All rights reserved.
    </div>
  </div>
</footer>
        </>
    )
}
export default Footer;