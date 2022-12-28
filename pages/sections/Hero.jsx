import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <>
      <div className='absolute z-0 w-full h-screen bg-clouds bg-no-repeat bg-cover top-0'></div>
      <div className='absolute z-0 w-full h-screen bg-building bg-no-repeat bg-cover top-0'></div>
      <div className='absolute z-10 w-full h-screen bg-ground bg-no-repeat bg-cover top-0'></div>
      <div className='reltive  flex flex-col justify-start items-center h-screen w-full z-5'>
        <Image  src='/Logo.svg'    
                className='mt-20'   
                alt='odyssey' 
                width={600} 
                height={600}/>
        <Image  src='/Symbol.svg'
                className='mt-10'       
                alt='odyssey' 
                width={200} 
                height={200}/>
      </div>
    </>
  )
}

export default Hero