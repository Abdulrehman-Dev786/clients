import React from 'react';

function Project() {
  const newbox = [
    {
      id: 9,
      img: "/card no1.jpg",
      button: "View-Live",
    },
    {
      id: 10,
      img: "/card no 2.png",
      button: "View-Live",
    },
    {
      id: 11,
      img: "/card no 3.jpeg",
      button: "View-Live",
    
    },
    {
      id: 12,
      img: "/card no 4.jpeg",
      button: "View-Live",
    },
  ];

  return (
    <>
      {/* personal project */}
      <section className='flex justify-evenly  bg-blue-100' id="project">
        <div className="p-12 bg-blue-100">
          <h1 className="text-3xl font-bold mt-5 ">
            <span className='bg-gradient-to-r from-blue-100 to-black '> Personal <span className="text-blue-600">Project</span></span> 
          </h1>
          
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-11 pt-10">
            {newbox.map((item) => (
              <div
                key={item.id}
                className="relative group w-[300px] h-[170px]   md:w-[500px] md:h-[250px] overflow-hidden rounded-xl border-4 border-gray-100"
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
  onClick={() => window.open('https://github.com/Abdulrehman-Dev786/Abdulrehman-Dev786/blob/main/README.md', '_blank')}
  className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition"
>
  {item.button}
</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
