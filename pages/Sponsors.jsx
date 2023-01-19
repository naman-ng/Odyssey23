import React, { useState, useEffect, Children } from 'react';
import Spons from '../components/Spons';
import data from '../data/sponsors-data.json';

function Sponsors() {

  return (
    <div className="z-0 font-mulish flex flex-col pt-[8vmax] overflow-clip  text-[#F6971B] justify-center content-center ">
      {/* {console.log()} */}
      <div
        className={`block pt-[5vmax] md:flex flex-wrap align-center justify-evenly md:overflow-hidden  md:h-[5000px] xl:h-[5000px]`}
      >
        {data.map((item, i) => {
          return (
            <Spons
              name={item.name}
              front_img={item.front_img}
              back_img={item.back_img}
              link={item.link}
              title={item.title}
              logo={item.logo}
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
