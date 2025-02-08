'use client'

import About from "@/Components/About"
import Cards from "@/Components/Cards"
import Feature from "@/Components/Feature"
import Footer from "@/Components/Footer"
import Fungame from "@/Components/Fungame"
import Landingpage from "@/Components/Landingpage"
import Navbar from "@/Components/Navbar"
import Page2 from "@/Components/Page2"





function page() {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Page2 />
      <About />
      <Feature />
      <Fungame />
      <Cards />
      <Footer />
 
   
    </div>
  )
}

export default page
