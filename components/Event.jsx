import { transform } from 'framer-motion'
import React,{useState} from 'react'
import EventListPrint  from '../components/Event';

function Event({name, tagline, knowmore, bg, image, align, key, knowmoreList}) {

  let alignVal = align%2===0?"left":"right"
  const[isExpanded,setExpanded] = useState(false)
  let buttonText= "Know More"
  let height= "50%"
  let heightImg= 250

  function setButtonText(prev){
    buttonText= prev == true? "Show Less":"Know More";
  }
  function setHeight(prev){
    height= prev == true? 380:300;
  }

  return (
    <div  className= { ` 
    leading-[4vw]

    ${(isExpanded)
      ? "sm:h-[36vw] md:h-[36vw] lg:h-[31vw] xl:h-[28.0vw] h-[37vw] "
      : "sm:h-[29vw] md:h-[28vw] lg:h-[25vw] xl:h-[21vw] h-[26vw] "
    } w-screen transition-timing-function-[ease-in]  rounded-t-lg -mt-2 shadow-lg
                          ${(isExpanded)
                              ? "translate-y-[0.1vw] duration-[1000ms]"
                              : "translate-y-[0.1vw] duration-[1000ms]"
                            } transform transition-all `}
          style={{backgroundColor: bg, border: '1px solid #000000',  
           }} >  

      {name&&<img className={`  drop-shadow-[5px_5px_0px_#000]

      ${(isExpanded)
        ? "sm:h-[35vw] md:h-[35vw] lg:h-[30vw] xl:h-[27.4vw] h-[36vw]"
        : "sm:h-[21vw] md:h-[22vw] lg:h-[21vw] xl:h-[17vw] h-[20vw]"
      }
         ${(isExpanded)
                  ? "translate-y-[0.1vw] duration-[1000ms]"
                  : "sm:mt-5 lg:mt-5 md:mt-5 xl:mt-5 2xl:mt-5 mt-1 translate-y-[0.1vw] duration-[1000ms]"
                  } transform transition-all    
                          ${ (alignVal==="left")
                          ? "2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-20 ml-8 mr-[6vw]"
                          : " xl:mr-[15vw] mr-[8vw] " } `}

            src= {image}  alt="image"
            style={{
                      float: alignVal,
                    }} />}

      <div className={`ml-[10vw] 

      lg:mt-[6vw] xl:mt-[6vw]  mr-[8vw]
      
                    ${(isExpanded)
                      ? "lg:mt-[3vw] md:mt-[4vw] sm:mt-[2.4vw] mt-[2vw] leading-[5vw] "
                      : " md:mt-[6vw] sm:mt-[3vw] translate-y-[0.1vw] duration-[1000ms] mt-[3vw]" }
                    
                    `}>
        <div className= {`  translate-y-[0.1 vw] duration-[1200ms]
                          ${(isExpanded)
                              ? "2xl:text-7xl  lg:text-4xl md:text-3xl xl:text-5xl sm:text-2xl text-[5.5vw]"
                              : "2xl:text-6xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-[4vw]   " }   `}>
          {name} </div>

        <div className= {` translate-y-[0.1vw] duration-[1000ms]
        leading-[3vw]
                            ${(isExpanded)
                              ? "lg:text-2xl xl:text-2xl md:text-2xl 2xl:text-5xl sm:text-1xl text-[2.4vw]"
                              : "2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[2.3vw] " }`} >
          {tagline} </div>

        <div className= {`font-italic mt-1 mr-[1vw] text-[2vw] 
        leading-[2.5vw]
        transition-delay-[10s] translate-y-[1vw] duration-[100ms] 
                    ${(isExpanded)
                      ? "lg:text-xl sm:text-xs md:text-xs sm:mr-5 2xl:text-3xl"
                      : "" }   `} >
          {(isExpanded)? 
          knowmore:"" } 
          
        </div>

        {/* <div >
          {knowmoreList.map((oevents, i) => (
              <EventListPrint
                  eventName={oevents.eventName}
                  description={oevents.description}
                  registrationLink={oevents.registrationLink}
                />    
          ))}
        </div> */}
      
        <div className="btn" style={{ color: bg }}> 
            {name&&<button className={` font-bold xl:text-xl lg:text-xl sm:text-xs  2xl:text-[1.2vw] mt-[2vw]
                                           xl:p-1 lg:p-1 md:p-1 sm:p-1 2xl:p-0 2xl:h-[2vw] 2xl:w-[8vw]
                                           
                                           bg-[#F9F9F9] rounded-lg  text-[1.72vw] h-[3.4vw] w-[12vw]
            leading-[4vw]
                    ${(isExpanded)
                      ? "translate-y-[1vw] duration-[1000ms] h-[3vw] w-[13vw] sm:h-[3vw] sm:w-[12vw] "
                      : "translate-y-[-1vw] duration-[1000ms] "
                    }  transform transition-all
                    
                     ` } 
                      type="button"
                      onClick= { () => { setExpanded(prev => !prev)}}  >
                    {setButtonText(isExpanded)}
                    {setHeight(isExpanded)}
                    {buttonText}
            </button>  }
        </div>
      </div>   
    </div>
  )
}


export default Event