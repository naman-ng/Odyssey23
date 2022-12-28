import Image from 'next/image'
import React from 'react'
import {useTransform,
        useMotionValue, 
        motion} from 'framer-motion' 


function Hero() {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const xposition1 = useTransform(x,[0,1000],[-10,10]);
  const xposition2 = useTransform(x,[0,1000],[-20,20]);
  const xposition3 = useTransform(x,[0,1000],[-30,30]);

  const yposition1 = useTransform(y,[0,1000],[-10,10]);
  const yposition2 = useTransform(y,[0,1000],[-20,20]);
  const yposition3 = useTransform(y,[0,1000],[-30,30]);


  const handleMouse=(e)=>{
    x.set(e.pageX);
    y.set(e.pageY);
    console.log(x,y)
  }

  return (
    <div className='relative w-full h-screen scale-110'
         onMouseMove={(e)=>handleMouse(e)}>

      <motion.div className='absolute z-0 w-full h-screen bg-clouds bg-no-repeat bg-cover top-0'
                  style={{
                    translateX:xposition1,
                    translateY:yposition1
                  }}>
      </motion.div>
      <motion.div className='absolute z-0 w-full h-screen bg-building bg-no-repeat bg-cover top-0'
                  style={{
                    translateX:xposition2,
                    translateY:yposition2
                  }}>
      </motion.div>
      <motion.div className='absolute z-10 w-full h-screen bg-ground bg-no-repeat bg-cover top-0'
                  style={{
                    translateX:xposition3,
                    translateY:yposition3
                  }}>
      </motion.div>

      <div className='relative  flex flex-col justify-start items-center h-screen w-full z-5'>
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
    </div>
  )
}

export default Hero