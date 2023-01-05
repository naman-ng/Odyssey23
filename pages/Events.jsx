import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import Image from 'next/image';
function Events() {
  const eventList = [
    {
      name: 'Lifestyle',
      tagline: 'Join the fashion elite at our exclusive fest events.',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#B8215A',
      image: '/images/event_lifestyle.png',
      align: 0,
    },
    {
      name: 'Quizzing',
      tagline: 'Are you ready to face off against other trivia enthusiasts? Join us!',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#EE2D69',
      image: '/images/event_quizzing.png',
      align: 1,
    },
    {
      name: 'Dance',
      tagline: 'Experience the thrill of the dance floor at our fest event.',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#00B9AD',
      image: '/images/event_dance.png',
      align: 0,
    },
  ];

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
    <div className="gradient-blue h-auto  justify-center w-full  font-mulish flex flex-col  sm:pt-[5vmax] md:pt-[5vmax] xl:pt-[5vmax] lg:pt-[5vmax] pt-[6.6vmax] overflow-clip  text-[#F9F9F9] ">
      {eventList.map((event, i) => (
        <main>
          <Event
            name={event.name}
            tagline={event.tagline}
            knowmore={event.knowmore}
            bg={event.bg}
            image={event.image}
            align={event.align}
            key={i}
          />
          {/* <img className='w-screen mb-[-0.1vw] mt-[0.1vw]' src="/images/tealborder.png" 
                    style={{  width: "100%" }}  /> */}
        </main>
      ))}
    </div>
  );
}

export default Events;
