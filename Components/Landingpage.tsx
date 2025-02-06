import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  
  return (
    <div    className='w-full h-screen bg-slate-50 pt-1'>
      <div data-scroll  data-scroll-speed="0.5" className='text  mt-40 px-20'>
      {["we create","eye-opning","presentation"].map((item,index)=>{
                return <div className='mask font-["Founders_Grotesk"]'>
                 <div className=' w-fit flex items-end overflow-hidden ' >
                 {index === 1 && (
                     <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration :1 }}  className=' mr-[1vw] w-[8vw] ronded-md h-[6.7vw] top-[1vw] relative bg-sky-400 ' ></motion.div>
                  )}
                    <h1 className='text-[8vw] leading-[6.5vw] uppercase tracking-tighter font-sans '>{item}</h1>
                 </div>
                </div>
            })}
      </div>
      <div className='  border-t-[2px] border-slate-500 mt-28  flex justify-between items-center py-5 px-20  ' >
        {["for public and private companies","from the first pitch to IPO"].map((item, index) => (
          <p className=' capitalize text-md font-light tracking-tight leading-none  ' >{item}</p>
        )
        )}
        <div className='start flex items-center gap-5 ' >
          <div className='px-4 py-2 border-[2px] border-slate-600 rounded-full text-xs capitalize' >start the project</div>
          <div className='w-8 h-8 border-[2px] border-slate-600 rounded-full flex items-center justify-center ' > 
                 <span className='rotate-[45deg]'><FaArrowUpLong /> </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
