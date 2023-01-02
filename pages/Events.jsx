import React, {useState} from 'react';
import Event from '../components/Event'

function Events() {
  const eventList = [
    {
        name: "Fashion",
        tagline: "Join the fashion elite at our exclusive fest events.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#B8215A",
        image: "/images/event_fashion.png",
        align:0
    },
    {
        name: "Quizzing",
        tagline: "Are you ready to face off against other trivia enthusiasts? Join us!",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#EE2D69",
        image: "/images/event_quizzing.png",
        align:1
    },
    {
        name: "Dance",
        tagline: "Experience the thrill of the dance floor at our fest event.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        bg: "#00B9AD",
        image: "/images/event_dance.png",
        align:0
    }
  ]
  return (
  
    <div className="   justify-center w-full  font-mulish flex flex-col text-xl pt-[5vmax] overflow-clip  text-[#F9F9F9] " >
      {eventList.map((event, i)=>(
        <main>
             <Event name={event.name}
                    tagline={event.tagline}
                    knowmore={event.knowmore}
                    bg={event.bg}
                    image={event.image}
                    align={event.align}
                    key={i}/>
              {/* <img className='w-screen mb-[-0.1vw] mt-[0.1vw]' src="/images/tealborder.png" 
                    style={{  width: "100%" }}  /> */}
        </main>
      ))}
    </div>
    
    );
}

export default Events