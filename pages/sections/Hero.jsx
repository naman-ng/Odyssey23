import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {useTransform,
        useMotionValue, 
        useScroll,
        motion} from 'framer-motion' 
import skyline from '../../public/images/skyline.png'

function Hero() {
  const {scrollY} = useScroll();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ypos = useTransform(scrollY,[0,400],[0,400]);

  const xposition1 = useTransform(x,[0,2000],[-10,10]);
  const xposition2 = useTransform(x,[0,2000],[-20,20]);
  const xposition3 = useTransform(x,[0,2000],[-30,30]);
  const xposition4 = useTransform(x, [0, 2000], [-60, 60]);
  const xposition5 = useTransform(x, [0, 2000], [-40, 40]);

  const yposition1 = useTransform(y,[0,2000],[-10,10]);
  const yposition2 = useTransform(y,[0,2000],[-20,20]);
  const yposition3 = useTransform(y, [0, 2000], [-30, 30]);
  const yposition4 = useTransform(y, [0, 2000], [-60, 60]);
  const yposition5 = useTransform(y, [0, 2000], [-40, 40]);
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const handleMouse=(e)=>{
    x.set(e.pageX);
    y.set(e.pageY);

  }

  return (
    <div className='relative w-full h-auto z-10'
         onMouseMove={(e)=>handleMouse(e)}>

      <motion.div className='absolute z-10 w-full h-[64vmax] bg-clouds bg-no-repeat bg-contain -top-[2.5vw]'
                  style={{
                    translateX:((windowSize > 1024) ? xposition1 : 0),
                    translateY:((windowSize > 1024) ? yposition1 : 0),
                  }}/>
      <motion.div className='absolute z-0 w-full h-[64vmax] bg-building bg-no-repeat bg-contain top-[15vw] -left-[1vw]'
                  style={{
                    translateX:((windowSize > 1024) ? xposition2 : 0),
                    translateY:((windowSize > 1024) ? yposition2 : 0),
                    width:"103vw",
                  }}/>
      <motion.div className='absolute z-10 w-[106.5vw] xl:w-[104.5vw] h-[65vmax] bg-ground bg-no-repeat bg-contain top-[12vw] -left-[2vw]'
                  style={{
                    translateX:((windowSize > 1024) ? xposition3 : 0),
                    translateY:((windowSize > 1024) ? yposition3 : 0),
                  }}/>
      <motion.div className='absolute z-5 w-[100%] h-[20vmax] bg-road bg-no-repeat bg-contain top-[71vw] left-[-2vw] '
        style={{
          translateX:((windowSize > 1024) ? xposition3 : 0),
          translateY:((windowSize > 1024) ? yposition3 : 0),
          width:"104vw",
        }}/>
      <motion.div className='absolute z-20 w-[100%] h-[20vw] bg-truck bg-no-repeat bg-contain top-[53vw] left-[40vw] pb-10'
        style={{
          x:ypos,
          translateX:((windowSize > 1024) ? xposition4 : 0),
          translateY:((windowSize > 1024) ? yposition4 : 0),
        }}/>
      <motion.a href='https://www.google.com/maps/place/Indraprastha+Institute+of+Information+Technology+Delhi/@28.5458541,77.2731762,15z/data=!4m2!3m1!1s0x0:0x2c582e340e7bc556?sa=X&ved=2ahUKEwi92uKh7878AhUsUGwGHZMfDBEQ_BJ6BAg4EAg' 
                target='_blank'
                className=' absolute z-20 w-[100%] h-[23vw] bg-direction bg-no-repeat bg-contain top-[53vw] left-[80vw] pb-10'
        style={{
          translateX:((windowSize > 1024) ? xposition4 : 0),
          translateY:((windowSize > 1024) ? yposition4 : 0),
        }}/>
      <motion.a href={'#'} className='absolute z-10 md:p-5 p-2 font-mulish font-bold text-[white] md:text-2xl text-sm top-[80vw] left-[37vw] md:top-[60vw] md:left-[46vw] gradient-border'
        style={{
          translateX:((windowSize > 1024) ? xposition4 : 0),
          translateY:((windowSize > 1024) ? yposition4 : 0),
        }}>
          Register Now
      </motion.a>
      <motion.div className='absolute z-10 w-[46%] h-screen bg-stalls bg-no-repeat bg-contain top-[48vw] left-[0vmax] pb-10'
        style={{
          translateX:((windowSize > 1024) ? xposition5 : 0),
          translateY:((windowSize > 1024) ? yposition5 : 0),
        }}/>
        <motion.div className='absolute -z-[1] w-[36%] h-[10vmax] bg-skyline bg-no-repeat bg-contain top-[40vw] left-[27vw]'
          style={{
            translateX:((windowSize > 1024) ? xposition1 : 0),
            translateY:((windowSize > 1024) ? yposition1 : 0),
          }}/>
          
      <div className='relative flex flex-col justify-start items-center w-full z-[5] pb-[32vw]'>
        <Image  src='/Logo.svg'    
                className=' mt-[12vw]'   
                alt='odyssey' 
                width={0} 
          height={0}
          style={{
            width:"55vw"
          }}
        />
        <Image  src='/Symbol.svg'
                className='mt-[2vmax]'       
                alt='odyssey' 
                width={0} 
          height={0}
          style={{
            width:"13vw"
          }}
        />
      </div>
    </div>
  )
}

export default Hero