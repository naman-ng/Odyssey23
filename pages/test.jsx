import React,{useState,useEffect} from 'react'
import { motion, useScroll } from "framer-motion";
function test() {
    const { scrollYProgress } = useScroll()
    const [reveaFactor,setRevealFactor] = useState(10)
    useEffect(() => {
        return scrollYProgress.onChange(() => {
            setRevealFactor(scrollYProgress.current*100+10)
        })
      }, [])

    
    return (
        <div className='flex flex-col top-0 items-center overflow-clip'>
            
            <div className='h-[450vh] w-full top-0 relative flex justify-center'>
                <motion.div className='sticky top-[0rem] w-[90%] h-[80vh] bg-blue rounded-xl'
                            style={{background:`radial-gradient(circle at bottom, transparent ${reveaFactor}%, #1C1E56 10%)`}}>
                </motion.div>
            </div>

        </div>
  )
}

export default test