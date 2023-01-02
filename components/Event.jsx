import { transform } from 'framer-motion'
import React,{useState} from 'react'

function Event({name, tagline, knowmore, bg, image, align, key}) {

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

    ${(isExpanded)
      ? "sm:h-[36vw] md:h-[36vw] lg:h-[31vw] xl:h-[28.0vw] h-[35vw]"
      : "sm:h-[29vw] md:h-[28vw] lg:h-[25vw] xl:h-[21vw] h-[25vw]"
    } w-screen transition-timing-function-[ease-in] 
                          ${(isExpanded)
                              ? "translate-y-[0.1vw] duration-[1000ms]"
                              : "translate-y-[0.1vw] duration-[1000ms]"
                            } transform transition-all `}
          style={{backgroundColor: bg, border: '2px solid #FFC809 ',  
           }} >  

      <img className={`  

      ${(isExpanded)
        ? "sm:h-[35vw] md:h-[35vw] lg:h-[30vw] xl:h-[28.0vw] h-[33vw]"
        : "sm:h-[21vw] md:h-[22vw] lg:h-[21vw] xl:h-[17vw] h-[20vw]"
      }
         ${(isExpanded)
                  ? "translate-y-[0.1vw] duration-[1000ms]"
                  : "sm:mt-5 lg:mt-5 md:mt-5 xl:mt-5 2xl:mt-5 mt-1.5 translate-y-[0.1vw] duration-[1000ms]"
                  } transform transition-all    
                          ${ (alignVal==="left")
                          ? "2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-20 ml-8 mr-10"
                          : " xl:mr-[15vw] mr-[8vw] " } `}

            src= {image}  alt="image"
            style={{
                      float: alignVal,
                    }} />

      <div className={`ml-20  mt-[6vw]  mr-[8vw] 
                    ${(isExpanded)
                      ? "md:mt-[4vw] sm:mt-[2.4vw] "
                      : "sm:mt-[3vw] translate-y-[0.1vw] duration-[1000ms]" }
                    
                    `}>
        <div className= {`  translate-y-[0.1 vw] duration-[1200ms]
                          ${(isExpanded)
                              ? "xxl:text-5xl  lg:text-4xl md:text-3xl xl:text-5xl sm:text-2xl text-2xs"
                              : "xxl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-xs   " }   `}>
          {name} </div>

        <div className= {` translate-y-[0.1vw] duration-[1000ms]
                            ${(isExpanded)
                              ? "lg:text-2xl xl:text-2xl md:text-2xl xxl:text-2xl sm:text-1xl text-[2vw]"
                              : "xxl:text-1xl xl:text-1xl lg:text-1xl md:text-1xl sm:text-1xl text-[2.6vw] " }`} >
          {tagline} </div>

        <div className= {`font-italic mt-1 mr-20 col-2 text-4xs transition-delay-[10s] translate-y-[1vw] duration-[100ms] 
                    ${(isExpanded)
                      ? "lg:text-xl sm:text-xs md:text-xs sm:mr-5"
                      : "" }   `} >
          {(isExpanded)? knowmore:""} 
        </div>
      
        <div className="btn" style={{ color: bg }}>
            <button className={` font-bold text-[2xs] mt-4 bg-[#F9F9F9] rounded-lg p-1 
                    ${(isExpanded)
                      ? "translate-y-[1vw] duration-[1000ms]"
                      : "translate-y-[-1vw] duration-[1000ms]"
                    }  transform transition-all
                    ${(isExpanded)
                      ? "text-xs " : "text-xs "} ` } 
                      type="button"
                      onClick= { () => { setExpanded(prev => !prev)}}  >
                    {setButtonText(isExpanded)}
                    {setHeight(isExpanded)}
                    {buttonText}
            </button>  
        </div>
      </div>    
    </div>
  )
}

export default Event