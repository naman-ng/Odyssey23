import React from "react";

const Loader = () => {
  return (
    <div className="">
      <video loop autoPlay muted className="h-full w-full object-cover">
        <source src={"/loader.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
