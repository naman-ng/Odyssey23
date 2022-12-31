import React from "react";


export default function Event(props) {

  let bg = props.event.bg

  let align = props.index%2 ===0? "left": "right"

  let heightvar  = props.event.height

  return (

<div className=" row w-screen h-80"  style={{backgroundColor: bg, border: '2px solid #FFC809 '} } >

  <div >
  <img className="ml-10 mr-20 h-80 " src= {props.event.image}  alt="Logo"  style={{
          float: align,
  }} />

</div>

      <div className="mr-5" style={{}} >
      </div>

      <div className="ml-20 mt-20"  >

      <div className="col-2 text-6xl mt-9">
            {props.event.name}
            </div>

            <div className="mt-1 col-2 text-3xl  ">
            {props.event.tagline}
            </div>


            <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
                
                style={{color: bg }}
              >

                <button

                className="font-bold text-4xs mt-4 bg-[#C18C6C] rounded-lg "
                
                  type="button"
                  
                  onClick={() => {
                    props.expand(props.index);
                  }}
                >
                  Know More
                </button>
                
            </div>

      </div>    

      <br />

</div>
  );
}