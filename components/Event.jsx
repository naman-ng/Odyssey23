import React,{useState} from 'react'
import Image from 'next/image';

function Event({name, tagline, knowmore, bg, image, align, height, key}) {
  const alignVal = (key+1)%2==0?"left":"right"
  const[isExpanded,setExpanded] = useState(false)
  console.log(name)
  return (
    <div className=" row w-screen h-80"  style={{backgroundColor: bg, border: '2px solid #FFC809 '} } >
          <img className={`ml-10 mr-20 h-80 float-${alignVal}`} src= {image}  alt="Logo"  style={{
                  float: alignVal,
          }} />

          <div className="ml-20 mt-20"  >
            <div className="col-2 text-6xl mt-9">
                  {name}
            </div>
            <div className="mt-1 col-2 text-3xl  ">
            {tagline}
            </div>
                <div className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                    style={{color: bg }}>
                    <button className="font-bold text-4xs mt-4 bg-[#C18C6C] rounded-lg p-2"
                            type="button"
                            onClick={() => setExpanded(prev=>!prev)}>
                      Know More
                    </button>  
                </div>
          </div>    
    </div>
  )
}

export default Event