import { useRouter } from 'next/router';
import Image from 'next/image';
import LayerBottomContact from '../../public/contactFormLayerBottom.svg';
import Link from 'next/link';
function Form() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center relative w-4/5 h-[45%] sm:h-[50%] lg:h-4/5 top-[0rem] md:top-[8vmax]  flex-wrap z-20">
      <div className=" absolute w-[95%] h-[65%] z-20 bg-contactFormTop pointer-events-none bg-no-repeat bg-contain" />

      <div className="absolute z-10 top-0 flex flex-col items-center justify-center h-full  w-[95%] bg-[#F16823]">
        <Link
          className="bg-[#d7b537] text-lg  rounded-lg hover:bg-[#d7b437e0] text-[#EE2D69] transition-all duration-300 font-[620] hover:font-bold  md:w-[30%] w-2/5 mt-8 md:mt-4 p-2 text-center"
          href="mailto:odyssey.iiitd.helpdesk@gmail.com?subject=Odyssey"
        >
          Contact Us
        </Link>
      </div>

      <div className="absolute top-[39vh] md:top-[39vmax] xl:top-[30vmax] 2xl:top-[26vmax] w-[97.4%] z-20 pointer-events-none md:mt-4">
        <Image
          src={LayerBottomContact}
          width={0}
          height={0}
          className="w-full"
        />
      </div>
    </div>
  );
}
export default Form;
