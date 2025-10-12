import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
        <div className='flex items-center justify-center '>
            <h1>This is my home page</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Home