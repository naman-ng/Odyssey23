import React, { useState, useEffect, Children } from 'react';
import Spons from '../components/Spons';
import data from '../data/sponsors-data.json';

function Sponsors() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return loading ? (
    <div className="">
      <video loop autoPlay muted className="h-full w-full object-cover rounded-[1.5vmax]">
        <source src={'/loader.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div className="z-0 font-mulish flex flex-col pt-[8vmax] overflow-clip  text-[#F9F9F9] justify-center content-center ">
      <div className="ml-[5%] ">
        <p className="text-4xl md:text-6xl">Sponsors</p>
      </div>
      {/* {console.log()} */}
      <div
        className={`block pt-[5vmax] md:flex flex-wrap align-center justify-evenly md:h-[1700px] xl:h-[1800px]  md:overflow-hidden`}
      >
        {data.map((item, i) => {
          return (
            <Spons
              name={item.name}
              front_img={item.front_img}
              back_img={item.back_img}
              link={item.link}
              number={i}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
