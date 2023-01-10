import { useRouter } from 'next/router';
import Image from 'next/image';
import LayerBottomContact from '../../public/contactFormLayerBottom.svg';
import Link from 'next/link';
function Form() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center relative w-full sm:h-[50%] h-[50%] lg:h-4/5 md:mt-20 lg:mt-8 xl:mt-36 top-[0rem] md:top-[8vmax]  flex-wrap z-20">
    <Image src="/images/odessey_truck_form.svg" className=' w-full h-[110%]' alt='not loaded' fill style={{objectFit:"contain"}}
    ></Image>
    <h3 className="z-20 absolute md:top-[30%] sm:top-[30%] lg:top-[35%] sm:w-[65%] md:w-[45%] text-lg font-[629] italic text-center">"Help us clear your query by clicking the button below"</h3>
      <Link
          className="bg-[#d7b537] z-20 absolute md:top-[43%] sm:top-[45%] text-lg  rounded-lg hover:bg-[#d7b437e0] text-[#EE2D69] transition-all duration-300 font-[620] hover:font-bold sm:w-[40%] sm:h-[9%] md:h-[8%] md:w-[20%] md:mt-4 p-2 text-center"
          href="mailto:odyssey.iiitd.helpdesk@gmail.com?subject=Odyssey"
        >
          Contact Us
        </Link>
      
    </div>
  );
}
export default Form;
