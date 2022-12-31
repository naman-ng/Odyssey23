import EventsPage from "./sections/EventList";
import React, {useState} from 'react';
import EventList from "./sections/EventList";


function Events() {
  const list = [
    {
        name: "Fashion",
        tagline: "Join the fashion elite at our exclusive fest events.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        state: "Normal",
        bg: "#7A1501",
        image: "/images/fashion.jpg",
        align: 1,
        height: 350

    },
    {
        name: "Quizzing",
        tagline: "Are you ready to face off against other trivia enthusiasts? Join us!",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        state: "Normal",
        bg: "#00381F",
        image: "/images/quizzing.jpg",
        align: 0,
        height: 350

    },
    {
        name: "Dance",
        tagline: "Experience the thrill of the dance floor at our fest event.",
        knowmore: "Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.",
        state: "Normal",
        bg: "#121D21",
        image: "/images/dance.jpg",
        align: 1,
        height: 350

    }
      
  ]

  let [eventList, setEventList] = useState(list);

  const expand = (index) => {
    eventList[index].state = "Expand"
    
    
    return(
      

<EventList eventList={eventList} expand = {expand} normal={normal}/>
    );

  }

  const normal = (index) => {
    eventList[index].state = "Normal"

    return(
      <EventList eventList={eventList} expand = {expand} normal={normal}/>
    );

  }

  return (
  
    <main  className="container font-mulish text-xl text-[#C18C6C] pt-[5vmax] " >
    
    <EventList eventList={eventList} expand = {expand} normal={normal}/>
    </main>
    
    );
}

export default Events