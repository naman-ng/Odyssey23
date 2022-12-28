import Image from 'next/image'
import React from 'react'
import Reveal from '../../components/Reveal'
function ValueProposition() {
  return (
    <div className='relative flex flex-col justify-start items-center w-full h-screen bg-[white] text-center font-mulish color-[black] '>
      <div className='relative  left-0 w-full mt-[-5px]'>
        <Image src='/road.svg'
                height={300}
                width={1500}
                alt='road'/>
      </div>
      <div className='absolute z-10 top-[-15%] right-0'>
        <Image src='/truck.svg'
                height={600}
                width={600}
                alt='road'/>
      </div>
      <div className='absolute z-10 top-[-20%] left-0'>
        <Image src='/stalls.svg'
                height={300}
                width={1000}
                alt='road'/>
      </div>
      
      <p className='w-[30%]'>IIIT Delhi's Odyssey celebrates the essence and beauty of culture and of it's arts. It celebrates the Actor, the Dancer, the Musician, the Writer and the Designer, with over 45 events and a footfall of 25,000+. </p>
      <Reveal/>
    </div>
  )
}

export default ValueProposition