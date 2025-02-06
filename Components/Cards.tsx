import React from 'react'
import { PiCopyright } from "react-icons/pi";

function Cards() {
  return (
    
    <div className='w-full h-screen bg-white flex  items-center gap-5  '>
        <div className='cardContainer h-[50vh] w-1/2 pl-10 relative ' >
            <div className=' w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center ' >
              <img  className='bg-cover w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              <div className=' w-28 h-7 absolute left-16 bottom-6 text-[#CDEA68] border-[1px]  rounded-xl border-[#CDEA68] overflow-hidden '  >
                <div className='flex items-center pl-1.5 pb-1.5 ' >
                  <span ><PiCopyright /></span>
                  <h5>2019-2025</h5>
                  </div>
              </div>
            </div>
        </div>
           <div className='cardContainer h-[50vh] w-1/2 flex gap-5 relative ' >
               <div className='card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center ' >
              <img  className='bg-cover w-36 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <div className=' w-40 h-7 absolute left-8 bottom-8  text-white border-[1px]  rounded-xl border-white overflow-hidden '  >
                <div className='flex items-center pl-1.5 pb-1.5 ' >
                  <h6 className='' >RATING</h6>
                  <h5 className='pl-1' >5.0</h5>
                  <h6 className='pl-1'>CLUTCH</h6>
                  </div>
              </div>
               </div>
            <div className='card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center relative ' >
              <img  className='bg-cover w-28 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <div className=' w-60 h-7 absolute left-8 bottom-8  text-white border-[1px]  rounded-xl border-white overflow-hidden '  >
                <div className='flex items-center pl-1.5 pb-1.5 ' >
                  <h6 className='uppercase' >business  </h6>
                  <h6 className='uppercase pl-1'  > bootcamp </h6>
                  <h6 className='uppercase pl-1 ' >alumni </h6>
                  
                  </div>
              </div>
            </div>
            
        </div>


    </div>
      
    
  )
}

export default Cards
