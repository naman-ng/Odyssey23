import Image from "next/image";
import { useRef } from "react";
import useIsInViewport from "../hooks/useInViewPort";

const Dhol = () => {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);

  return (
    <div className="w-full relative bg-[#fce7c4] pt-20">
      <h5 className="w-full md:w-1/2 mx-auto text-center text-[#000]">
        Feel the adrenaline rush, the pumping of you blood as we bring to you
        yet another spectacular edition of the 2 day event. Come participate,
        experience and feel the excitement as you watch the star with close
        proximity or see the different competitions. Come and make numerous and
        unforgettable memories and at Odyssey.
      </h5>
      {/* <div className="h-48 "> */}
      <Image
        src="/paaji.svg"
        alt="waves"
        width={450}
        height={1000}
        className={`${
          isInViewport
            ? "translate-x-14 duration-[5500ms]"
            : "translate-x-0 duration-[0ms]"
        } transform transition-all`}
        ref={ref}
      />
      {/* </div> */}

      <div className="absolute w-full h-72 -bottom-12">
        <Image src="/waves.svg" alt="waves" fill className="object-cover" />
      </div>
    </div>
  );
};
export default Dhol;
