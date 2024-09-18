import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='bg-[#000000]   pt-9 '>
        <div className="container  mx-auto flex justify-between text-center">
<div className="left ">
<h1 className='text-center text-5xl font-bold  text-[#f27b13] mb-4'>  Discover Your Dream Home with Nestly</h1>
<p className="text-white">
          Find the best places to live and invest in the perfect property today.
        </p>
        
</div>
<div className="right">
    <img className="" src="heroimg2.png" alt=''/>
</div>
        </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}

export default Hero