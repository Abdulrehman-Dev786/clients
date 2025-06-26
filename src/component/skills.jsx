function Skills() {
    const cards=[
        { id:1,
          imges:"first.png"
        },
        { id:2,
          imges:"second.png"
        },
        {  id:3,
          imges:"thired.png"
        },
        {  id:4,
          imges:"forth.png"
        },
        {  id:5,
          imges:"fifth.png"
        },
        {  id:6,
          imges:"sixth.png"
        },
        {  id:7,
          imges:"mysql.png"
        },
        {  id:8,
          imges:"eight.png"
        }
      ]

    return (
        <>
              {/* Skills section */}
  <section id="skills" className='relative overflow-hidden bg-blue-50 py-16 px-8 rounded-2xl shadow-xl'>
  <div className='absolute inset-0 z-0 dots-bg'></div>
  <div className='relative z-10'>
    <h1 className='text-3xl font-bold mb-20'>
     <span className="bg-gradient-to-r from-blue-100 to-black"> MY <span className='text-blue-800 '>SKILLS</span></span> 
    </h1>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
      {cards.map((card) => (
        <div  className='rounded-3xl p-6 border-4 flex flex-col items-center text-center'>
          <img className='w-20 h-20 object-contain' src={card.imges} alt='Skill' />
          <p className='mt-2'>Web Development</p>
        </div>
      ))}
    </div>
  </div>
</section>
        </>
    )
} export default Skills;
