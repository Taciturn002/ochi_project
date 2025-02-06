import { motion } from 'framer-motion'
import React from 'react'

function Page2() {
  
  return (
    <div className='w-full h-[50vh] bg-[#004D43] py-20 rounded-3xl ' >
        <div className='  w-full border-t-2 border-b-2 border-white flex whitespace-nowrap overflow-hidden ' >
           {Array.from({length:2}).map((_,index) => (
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear", duration:10 }}   className='text-[15vw] leading-none text-white uppercase font-semibold pb-3 -mt-3 pr-20 ' key={index} >ochi we are</motion.h1>
                
            ))}
        
        </div>
       
    </div>
  )
}

export default Page2
