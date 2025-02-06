import React from 'react'

function About() {
  return (
    <div className='w-full py-20  bg-[#CDEA68] rounded-3xl p-20 ' >
        <h1 className='text-[3vw] leading-none ' >Ochi is a strategic presentation agency for forward-thinking businesses that
              need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className='w-full border-t-[1px] border-white mt-20 overflow-hidden pt-20  flex' >
          <div className='w-1/2 ' >
              <h1 className='text-7xl' >Our approach:</h1>
            <button className='px-10 py-4  bg-black rounded-full text-white flex items-center gap-10  mt-10 uppercase'>Read more 
                <div className='w-3 h-3 bg-white rounded-full' ></div>
            </button>
          </div>
          <div className='w-1/2 h-[65vh] bg-red-400 rounded-3xl ' >

          </div>
      </div>
    </div>
    

  )
}

export default About
