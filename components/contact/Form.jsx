import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import Image from "next/image";
import LayerBottomContact from "../../public/contactFormLayerBottom.svg";
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
        <div className="flex flex-col items-center relative w-4/5 h-[45%] sm:h-[50%] lg:h-4/5 top-[0rem] md:top-[8vmax]  flex-wrap z-20">
            <div className=" absolute w-[95%] h-[65%] z-20 bg-contactFormTop pointer-events-none bg-no-repeat bg-contain"/>

            <div className="absolute z-10 top-0 flex flex-col items-center justify-center h-full  w-[95%] bg-[#F16823]">
                <form className=" flex h-2/3 mt-[10%] w-full flex-col justify-center items-center " 
                      onSubmit={(e)=>Sendmail(e)}>
                    <input  className=" h-1/5 w-[90%] rounded-lg bg-[#A14123] mt-5 sm:mt-0 pl-4 text-[white] font-mulish font-medium" 
                            type="email" 
                            name="email" 
                        placeholder="Email" />
                    <input  className="h-1/5 w-[90%] mt-8 md:mt-4 rounded-lg bg-[#A14123] pl-4 text-[white] font-mulish font-medium" 
                            name="query" 
                            type="text" 
                            placeholder="Query"/>
                    <button className="bg-[#d7b537] text-lg  rounded-lg hover:bg-[#d7b437e0] text-[#EE2D69] transition-all duration-300 font-[620] hover:font-bold  md:w-[30%] w-2/5 mt-8 md:mt-4 p-2 text-center" 
                            type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="absolute top-[39vh] md:top-[39vmax] xl:top-[30vmax] 2xl:top-[26vmax] w-[97.4%] z-20 pointer-events-none md:mt-4">
                <Image src={LayerBottomContact} width={0} height={0} className="w-full" />
            </div>
        </div>
    )
}    
export default Form;