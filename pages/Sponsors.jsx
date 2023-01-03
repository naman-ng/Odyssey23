import React, { useState, useEffect, Children } from 'react';
import Spons from '../components/Spons';
import data from '../data/sponsors-data.json';

function Sponsors() {

  const sponsData = [
    { name: 'name-1', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-2', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-3', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-4', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-5', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-6', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-7', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-8', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-9', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-10', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-11', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-12', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: 'name-13', front_img: '/frontSpons.png', back_img: '/backSpons.png', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
    { name: '', front_img: '', back_img: '', link: 'https://www.google.com/' },
  ];

  return (
    <div className="z-0 font-mulish flex flex-col pt-[8vmax] overflow-clip  text-[#F9F9F9] justify-center content-center ">
      <div className="ml-[5%] ">
        <p className="text-4xl md:text-6xl">Sponsors</p>
      </div>
      {console.log()}
      <div className={`block pt-[5vmax] md:flex flex-wrap align-center justify-evenly md:h-[1700px] xl:h-[1800px]  md:overflow-hidden`}>
        {data.map((item, i) => {
          return <Spons name={item.name} front_img={item.front_img} back_img={item.back_img} link={item.link} number={i} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Sponsors;
