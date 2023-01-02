import emailjs from "emailjs-com";
import { useRouter } from "next/router";

function Form(){
    const router=useRouter();
    const Sendmail = (e) =>{
        e.preventDefault();
        router.push("/");
        emailjs.sendForm("service_5j308vp","template_2vtx70s",e.target,"aJ6yDzrpNE9WJyctl")
               .then(res=>{
                        console.log(res);
                        router.push("/");
                    })
               .catch(err=>{
                        console.log(err);
                    })
    }

    return(
        <div className=" flex flex-col items-center relative w-4/5 md:h-4/5 md:top-[8vmax] top-[25vmax] flex-wrap z-20">
            <div className=" absolute w-[95%] md:h-3/5 h-full z-20 bg-contactFormTop pointer-events-none bg-no-repeat bg-contain">
            </div>

            <div className="absolute z-10 top-0 flex flex-col align-middle justify-center h-[50%] md:h-full  w-[95%] bg-[#F16823]">
                <form className=" flex h-2/3 md:mt-40 w-full flex-col justify-center items-center align-middle " 
                      onSubmit={(e)=>Sendmail(e)}>
                    <input  className=" h-1/5 w-[90%] rounded-lg bg-[#A14123] pl-4" 
                            type="email" 
                            name="email" 
                            placeholder="Email" />
                    <input  className="h-1/5 w-[90%] mt-4 rounded-lg bg-[#A14123] pl-4" 
                            name="query" 
                            type="text" 
                            placeholder="Query"/>
                    <button className="bg-[#d7b537]  rounded-lg hover:bg-[#897633]  md:w-1/5 w-2/5 mt-4 p-2 text-center" 
                            type="submit">
                        submit
                    </button>
                </form>
            </div>

            <div className="absolute w-full h-3/5 z-20 bg-LayerBottomContact pointer-events-none bg-no-repeat bg-contain md:-bottom-[35%] -bottom-[0%] object-fill ">
            </div>
        </div>
    )
}    
export default Form;