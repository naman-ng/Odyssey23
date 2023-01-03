import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";

function Reveal() {
    const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(0)

    useEffect(() => {
        return scrollYProgress.onChange(() => {
          setRevealFactor(Math.max(Math.min((scrollYProgress.current * 90) - 10, 74.6)-12, 0))
          // console.log((scrollYProgress.current * 150) - 10)
        })
    }, [])

    return (
      <div className='relative flex flex-col top-[1vw] left-0 right-0 h-[400vw] items-center justify-center w-full'>
        <motion.div className='sticky z-10 top-[40vh] lg:top-[5vh] w-[70%] md:w-[95%] h-[50vw] bg-blue rounded-[1.5vmax]'
                    style={{ background: `radial-gradient(circle at center, transparent ${reveaFactor/1.6}vmax, #1C1E56 5vw)` }}>
        </motion.div>
        <motion.div className='sticky w-[70%] md:w-[95%] rounded-[1.5vmax] h-[50vw] top-[40vh] lg:top-[5vh] z-0 bg-[black] mt-[-50vw] bg-cover' 
                    alt='odyssey' 
                    width={0} 
                    height={0}>
            <video loop autoPlay muted className='h-full w-full object-cover rounded-[1.5vmax]'>
                <source src={'/vid.mp4'} type="video/mp4"/>
                Your browser does not support the video tag.
            </video> 
        </motion.div>
      </div>
    )}

export default Reveal