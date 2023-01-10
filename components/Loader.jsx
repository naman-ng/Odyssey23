import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";

const Loader = () => {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  function display(windowSize) {
    if (windowSize > 1024) {
      return (
        <div className="">
          <video loop autoPlay muted className="h-[100vh] w-full object-cover">
            <source src={"/loader.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <div className="">
          <video loop autoPlay muted className="h-[100vh] object-cover">
            <source src={"/mobileloader.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  }
  // return display(windowSize);
  return (
    <>
      <BrowserView>
        <div className="">
          <video loop autoPlay muted className="h-[100vh] w-full object-cover">
            <source src={"/loader.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </BrowserView>
      <MobileView>
        <div className="">
          <video loop autoPlay muted className="h-[100vh] w-full object-cover">
            <source src={"/mobileloader.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </MobileView>
    </>
  );
};

export default Loader;
