import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";

function Reveal() {
  const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(10)
    useEffect(() => {
        return scrollYProgress.onChange(() => {
            setRevealFactor(scrollYProgress.current*100-10)
        })
    }, [])
  return (
    <div className='flex relative h-[200vh] flex-col items-center w-full my-20'>
      <motion.div className='sticky top-10 w-[98%] h-[90vh] bg-blue rounded-[2rem]'
                      style={{background:`radial-gradient(circle at bottom, transparent ${reveaFactor}%, #1C1E56 10%)`}}>
      </motion.div>
    </div>
  )
}

export default Reveal