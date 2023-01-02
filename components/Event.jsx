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
      ? "sm:h-[] md:h-[36vw] lg:h-[31vw] xl:h-[28.0vw]"
      : "sm:h-[] md:h-[28vw] lg:h-[25vw] xl:h-[21vw]"
    } w-screen transition-timing-function-[ease-in] 
                          ${(isExpanded)
                              ? "translate-y-[0.1vw] duration-[1000ms]"
                              : "translate-y-[0.1vw] duration-[1000ms]"
                            } transform transition-all `}
          style={{backgroundColor: bg, border: '2px solid #FFC809 ',  
          // height: (isExpanded)? 400 : height   
           }} >  

      <img className={`  

        

      ${(isExpanded)
        ? "sm:h-[] md:h-[35vw] lg:h-[30vw] xl:h-[28.0vw]"
        : "sm:h-[] md:h-[22vw] lg:h-[21vw] xl:h-[17vw]"
      }
         ${(isExpanded)
                  ? "translate-y-[0.1vw] duration-[1000ms]"
                  : "mt-5   translate-y-[0.1vw] duration-[1000ms]"
                  } transform transition-all    
                          ${ (alignVal==="left")
                          ? "ml-20 mr-10"
                          : "xl:mr-[15vw] mr-[8vw] " } `}

            src= {image}  alt="image"
            style={{
                      float: alignVal,
                      // height: (isExpanded)? 390 :heightImg  
                    }} />

      <div className={`ml-20  mt-[6vw]  mr-[8vw] 
                    ${(isExpanded)
                      ? "md:mt-[4vw] "
                      : "translate-y-[0.1vw] duration-[1000ms]" }
                    
                    `}>
        <div className= {`  translate-y-[0.1 vw] duration-[1200ms]
                          ${(isExpanded)
                              ? "text-5xl  lg:text-4xl md:text-3xl"
                              : "text-3xl   " }   `}>
          {name} </div>

        <div className= {` translate-y-[0.1vw] duration-[1000ms]
                            ${(isExpanded)
                              ? "text-2xl " : "text-1xl " }`} >
          {tagline} </div>

        <div className= {`font-italic mt-1 mr-40 col-2 text-4xs transition-delay-[10s] translate-y-[1vw] duration-[100ms] 
                    ${(isExpanded)
                      ? "lg:text-2xs  md:text-xs"
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