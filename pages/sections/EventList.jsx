import React from 'react'
import Image from 'next/image';
import Event from './Event';

function EventList(props) {

    return (
        props.eventList.map((event, i)=>{
            return <Event event ={event} key={i} expand={props.expand} index={i} normal={props.normal} />
        })
    )
}


export default EventList