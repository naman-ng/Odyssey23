import Image from 'next/image'
import React from 'react'

function ValueProposition() {
  return (
    <div className='flex flex-col w-full h-screen bg-[white] '>
      <div className='absolute left-0 w-full mt-[-5px]'>
        <Image src='/road.svg'
                height={2000}
                width={2000}
                alt='road'/>
      </div>
      <div className='absolute z-10 bottom-[-10rem] right-0'>
        <Image src='/truck.svg'
                height={600}
                width={600}
                alt='road'/>
      </div>
      <div className='absolute z-10 bottom-[-10rem] left-0'>
        <Image src='/images/stalls.webp'
                height={1200}
                width={1200}
                alt='road'/>
      </div>
      
      <p></p>

    </div>
  )
}

export default ValueProposition