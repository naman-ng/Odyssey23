import Image from 'next/image'
import React from 'react'
import Reveal from '../../components/Reveal'
import Gallery from '../../components/Gallery'
import dynamic from "next/dynamic";
const Dhol = dynamic(() => import("../../components/Dhol"), { ssr: false });

function ValueProposition() {
  return (
    <div className='relative flex flex-col justify-start items-center w-full h-auto gradient text-center font-mulish color-[black] '>
      <div className='relative  left-0 w-full mt-[-5px]'>
        <Image src='/road.svg'
                height={300}
                width={2200}
                alt='road'/>
      </div>
      <div className='absolute z-10 top-[-10%] right-0'>
        <Image src='/truck.svg'
                height={600}
                width={600}
                alt='road'/>
      </div>
      <div className='absolute z-10 top-[-10%] left-0'>
        <Image src='/stalls.svg'
                height={50}
                width={1000}
                alt='road'/>
      </div>
      
      <p className='w-[30%] text-xl text-black -mt-10'>IIIT Delhi's Odyssey celebrates the essence and beauty of culture and of it's arts. It celebrates the Actor, the Dancer, the Musician, the Writer and the Designer, with over 45 events and a footfall of 25,000+. </p>

      {/* <Gallery/> */}

      <Reveal/>
      <Dhol />
    </div>
  )
}

export default ValueProposition