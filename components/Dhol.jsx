import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import useIsInViewport from "../hooks/useInViewPort";

const Dhol = () => {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);
  return (
    <div className="w-full h-full z-0 mb-[0.8rem] sm:mb-[4.9rem] md:mb-[7.5rem] xl:mb-[8.5rem]   ">
      <h5 className="w-[55%] md:w-5/12 ml-[35%] lg:mx-auto text-left lg:text-center text-[#000] mt-[10vw] text-[1.2vmax] leading-[1.8vh] lg:leading-[3.3vh] mb-[-10vmax] ">
        Get ready for an unforgettable experience at Odyssey IIITD! Our upcoming events will be bursting with excitement and packed with activities for everyone to enjoy. Whether you're into dance and drama, finance and entrepreneurship, music and lifestyle, food and fun, art and photography, games and sports, or literature and designing, we've got you covered. Don't miss out on this amazing opportunity to connect with like-minded individuals and have a blast while doing it. See you at Odyssey IIITD!
      </h5>
      <Image
        src="/paaji.svg"
        alt="waves"
        width={0}
        height={0}
        className={`${
          (windowSize >= 768)
            ? "translate-x-[6vw] duration-[1000ms]"
            : "translate-x-[3vw] duration-[0ms]"
          } transform transition-all mb-[-1vw] w-[20vh] lg:w-[25vw]` }

        ref={ref}
      />
      <div className="absolute w-full h-[25vw] mt-[-7vmax]">
        <Image src="/waves.svg" alt="waves" fill className="object-contain w-full"
        />
      </div>
    </div>
  );
};
export default Dhol;
