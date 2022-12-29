import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";
import rockBand from '../public/images/rockBand.png'
import Image from 'next/image'
function Reveal() {
  const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(0)
    useEffect(() => {
        return scrollYProgress.onChange(() => {
          setRevealFactor(Math.max(Math.min((scrollYProgress.current * 90) - 10, 74.6)-12, 0))
          console.log((scrollYProgress.current * 90) - 10)
        })
    }, [])
  return (
    <div className='flex relative h-[450vh] flex-col items-center w-full mt-[5vmax]'>
      <motion.div className='sticky z-10 flex justify-center top-[8vh] w-[95%] h-[80vh] bg-blue rounded-[1.5vmax]'
        style={{ background: `radial-gradient(circle at bottom, transparent ${reveaFactor/1.6}vmax, #1C1E56 5vmax)` }}>
      </motion.div>
      <motion.div className='sticky w-full h-[80vh] top-[8vh] 2xl:top-[8vh] z-0 bg-[url(../public/images/rockBand.png)] mt-[-80vh] bg-cover' alt='odyssey' width={0} height={1000} style={{
        width:"70%",
      }} />
    </div>
  )
}

export default Reveal