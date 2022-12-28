import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import singer1 from "../public/images/singer-1.png";
import singer2 from "../public/images/singer-2.png";
import singer3 from "../public/images/singer-3.png";
import ResizeObserver from "resize-observer-polyfill"
function Gallery() {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)
  return (
    <>
      {/* <div className="h-[450vh] w-full relative flex justify-center">
            <div className="sticky top-[6.5rem] w-[90%] h-[80vh]">
          <motion.div className="z-10 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-1.png')]"
            style={{ backgroundPositionX: (textScaleX.current + 500).toString() + 'px' }}
          />
          <motion.div className=" z-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-2.png')] "
            style={{ backgroundPositionX: (scaleX.current + 500).toString() + 'px' }} />
          <motion.div className=" z-0 absolute rounded-[3rem] w-full h-full bg-[url('../public/images/singer-3.png')] "
            style={{ backgroundPositionX: (scaleX.current + 500).toString() + 'px' }} />
          
            </div>
      </div>
       <Image src={singer1} alt="singer-1" width={700} height={500} />
       <Image src={singer2} alt="singer-2" width={700} height={500} />
       <Image src={singer3} alt="singer-3" width={700} height={500} /> */}
      <div className="left-0 right-0 will-change-transform w-full sticky">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="sticky h-[100vh] w-[max-content] flex items-center px-0 py-40  "
        >
          <div className="sticky flex">
            <div className="h-[40vh] w-[800px]" ><Image src={singer1} alt="singer-1" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer2} alt="singer-2" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer3} alt="singer-3" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer1} alt="singer-1" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer2} alt="singer-2" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer3} alt="singer-3" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer1} alt="singer-1" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer2} alt="singer-2" width={700} height={500} /></div>
            <div className="h-[40vh] w-[800px]" ><Image src={singer3} alt="singer-3" width={700} height={500} /></div>
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="w-[100vw]" />
      <p className='w-[38%] text-3xl text-black'>Feel the adrenaline rush, the pumping of you blood as we bring to you yet another spectacular edition of the 2 day event. Come participate, experience and feel the excitement as you watch the star with close proximity or see the different competitions. Come and make numerous and unforgettable memories and at Odyssey.</p>

    </>
  );
}

export default Gallery;
