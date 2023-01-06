import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import eventList from '../data/eventList.json'
import Image from 'next/image';
function Events() {

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
        <source src={'/shortLoader.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div className='w-full gradient-blue sm:pt-[5vmax] md:pt-[5vmax] xl:pt-[5vmax] lg:pt-[5vmax] pt-[6.6vmax] '>
      <div className="w-full font-mulish justify-end flex flex-col  overflow-clip  text-[#F9F9F9] ">
        {eventList.map((event, i) => (
            <Event
              name={event.name}
              tagline={event.tagline}
              knowmore={event.knowmore}
              bg={event.bg}
              image={event.image}
              align={event.align}
              key={i}
              knowmoreList = {event.knowmoreList}   />
        ))}
      </div>
     <div className="absolute  w-full h-[25vw] -mt-[15vw] drop-shadow-sm">
        <Image src="/waves.svg" alt="waves" fill className="object-contain w-full"
        />
    </div>
    </div>
  );
}

export default Events;
