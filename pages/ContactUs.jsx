import React, { useState, useEffect } from "react";
import Form from "../components/contact/Form";
import { useTransform, useMotionValue, motion } from "framer-motion";

function ContactMain() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xposition1 = useTransform(x, [0, 2000], [-10, 10]);
  const xposition3 = useTransform(x, [0, 2000], [-30, 30]);

  const yposition1 = useTransform(y, [0, 2000], [-10, 10]);
  const yposition3 = useTransform(y, [0, 2000], [-30, 30]);
  const handleMouse = (e) => {
    x.set(e.pageX);
    y.set(e.pageY);
  };
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(178.63deg, #1C1E56 3.09%, #8E3A3A 60%, #1C1E56 99%)",
      }}
      className="relative flex w-[100%] top-40 lg:top-0 h-[100vh] justify-center align-middle overflow-x-clip mb-[20vw] overflow-hidden md:overflow-visible"
      onMouseMove={(e) => handleMouse(e)}
    >
      <motion.div
        className="absolute z-10 w-full h-[64vmax] -top-24 md:top-0 bg-clouds bg-no-repeat bg-contain "
        style={{
          translateX:
            (windowSize > 1024)
              ? xposition1
              : 0,
          translateY:
            (windowSize > 1024)
              ? yposition1
              : 0,
        }}
      />
      <motion.div
        className="absolute z-10 w-[106.5vw] xl:w-[104.5vw] h-[70rem] md:h-[70rem] bg-ground bg-no-repeat bg-contain top-[5rem] md:top-[0rem] -left-[2vw]"
        style={{
          translateX:
            (windowSize > 1024)
              ? xposition3
              : 0,
          translateY:
            (windowSize > 1024)
              ? yposition3
              : 0,
        }}
      />
      <motion.div
        className="absolute z-5 w-[100%] h-[20vmax] bg-road bg-no-repeat bg-contain top-[20rem]  md:top-[65vw] xl:top-[63vw] left-[-2vw] "
        style={{
          translateX:
            (windowSize > 1024)
              ? xposition3
              : 0,
          translateY:
            (windowSize > 1024)
              ? yposition3
              : 0,
          width: "104vw",
        }}
      />

      <Form />
    </div>
  );
}
export default ContactMain;
