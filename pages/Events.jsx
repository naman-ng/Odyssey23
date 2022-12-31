import React, {useState} from 'react';
import Event from '../components/Event'

function Events() {
  const eventList = [
    {
        name: "Fashion",
        tagline: "Join the fashion elite at our exclusive fest events.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#7A1501",
        image: "/images/fashion.jpg",
        align: 1,
        height: 350

    },
    {
        name: "Quizzing",
        tagline: "Are you ready to face off against other trivia enthusiasts? Join us!",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#00381F",
        image: "/images/quizzing.jpg",
        align: 0,
        height: 350

    },
    {
        name: "Dance",
        tagline: "Experience the thrill of the dance floor at our fest event.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#121D21",
        image: "/images/dance.jpg",
        align: 1,
        height: 350

    }
  ]
  

  return (
  
    <div className="z-0 font-mulish flex flex-col text-xl pt-[5vmax] overflow-clip  text-[#C18C6C] " >
      {eventList.map((event, i)=>(
             <Event name={event.name}
                    tagline={event.tagline}
                    knowmore={event.knowmore}
                    bg={event.bg}
                    image={event.image}
                    align={event.align}
                    height ={event.height}
                    key={i}/>
      ))}
    </div>
    
    );
}

export default Events