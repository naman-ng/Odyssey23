import React from 'react'
function MapComponent() {
  return (
    <>
        <div id='map' className="md:h-[40vmax] md:w-full -mt-[12vmax] rounded-t-lg overflow-hidden w-[90vw] h-[25vmax] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3227.467546236886!2d77.27233961116781!3d28.54600013342589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x463184c4bba507ae!2sE-Cell%20IIIT%20Delhi!5e0!3m2!1sen!2sin!4v1673964212209!5m2!1sen!2sin" 
                width="1920" 
                height="600" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default MapComponent