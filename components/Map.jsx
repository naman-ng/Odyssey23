import React from 'react'
function MapComponent() {
  return (
    <>
        <div id='map' className="rounded-lg overflow-hidden w-[90vw] h-[50vmax]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.755110979874!2d77.27018401550583!3d28.547079594693276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34637dc8497%3A0xb761d0490006e1ef!2sIIITD%20GATE%20NO-1!5e0!3m2!1sen!2sin!4v1674252237121!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default MapComponent