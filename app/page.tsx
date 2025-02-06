'use client'
import React from 'react'
import Navbar from '@/Components/Navbar'
import Landingpage from '@/Components/Landingpage'
import Page2 from '@/Components/Page2'
import About from '@/Components/About'
import Fungame from '@/Components/Fungame'
import Feature from '@/Components/Feature'
import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function page() {
  

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
   <Navbar/>
   <Landingpage/>
   <Page2/>
   <About/>
   <Fungame/>
   <Feature/>
   <Cards/>
   <Footer/>
    </div>
  )
}

export default page
