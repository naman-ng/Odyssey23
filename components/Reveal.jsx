import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";

function Reveal() {
  const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(10)
    useEffect(() => {
        return scrollYProgress.onChange(() => {
            setRevealFactor(scrollYProgress.current*100+10)
        })
    }, [])
  return (
    <div className='flex absolute top-[125vh] flex-col items-center w-full'>
      <div className='h-[90vh] z-10 relative w-full flex justify-center'>
          <motion.div className='sticky top-[6.5rem] w-[90%] h-[80vh] bg-blue rounded-xl'
                      style={{background:`radial-gradient(circle at bottom, transparent ${reveaFactor}%, #1C1E56 10%)`}}>
          </motion.div>
      </div>
      </div>
  )
}

export default Reveal