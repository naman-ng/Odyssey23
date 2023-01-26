import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import eventList from "../data/eventList.json";
import Image from "next/image";
function Events() {
  return (
    <div className="w-full gradient-blue sm:pt-[5vmax] md:pt-[5vmax] xl:pt-[5vmax] lg:pt-[5vmax] pt-[6.6vmax] text-[#F6971B]">
      <div className="w-full font-mulish justify-end flex flex-col  overflow-clip  text-[#F9F9F9] ">
        <br />
        <br />
        <br />
        <center>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Image
              alt="Day1"
              src="/Day1.png"
              width={1000}
              height={1000}
              style={{
                width: "45%",
              }}
            />
            <Image
              alt="Day2"
              src="/Day2.png"
              width={1000}
              height={1000}
              style={{
                width: "45%",
              }}
            />
          </div>
          <br />
          <br />
          <br />
          <Image
            alt="Map"
            src="/Map.png"
            width={1000}
            height={1000}
            style={{
              width: "40%",
            }}
          />
        </center>
        <br />
        <br />
        <br />
        {eventList.map((event, i) => (
          <Event
            name={event.name}
            tagline={event.tagline}
            knowmore={event.knowmore}
            bg={event.bg}
            image={event.image}
            align={event.align}
            key={i}
            knowmoreList={event.knowmoreList}
          />
        ))}
      </div>
      <div className="absolute  w-full h-[25vw] -mt-[15vw] drop-shadow-sm">
        <Image
          src="/waves.svg"
          alt="waves"
          fill
          className="object-contain w-full"
        />
      </div>
    </div>
  );
}

export default Events;
