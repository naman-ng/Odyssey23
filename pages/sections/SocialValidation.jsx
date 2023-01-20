import React from 'react';
import Image from 'next/image';

const Circle = ({ title, children }) => (
  <div className=" w-[17vw] h-[17vw] bg-[#B8215A] border border-[#000] pt-3 p-3 md:p-5 lg:p-12 md:pt-6 rounded-full flex flex-col justify-start items-center text-center text-[white]">
    <p className="text-[1.7vw] leading-tight">{children}</p>
    <h3 className="text-[3vw] md:text-[5vw] -mt-2 md:mt-[1vw] font-bold">
      {title}
    </h3>
  </div>
);

function SocialValidation() {
  return (
    <>
      <div className="w-full bg-[#1C1E56] z-10">
        <div className="w-full mb-[2vmax] grid grid-cols-4">
          <div className="w-full h-full flex items-center justify-end pr-[2vmax]">
            <Circle title="30k">Accounts reached per week over</Circle>
          </div>
          <p className="text-center w-full text-[white] py-[6vmax] col-span-2 text-[1.2vmax] 2xl:tracking-wider 2xl:leading-normal">
            Feel the adrenaline rush, the pumping of you blood as we bring to
            you yet another spectacular edition of the 2 day event. Come
            participate, experience and feel the excitement as you watch the
            star with close proximity or see the different competitions. Come
            and make numerous and unforgettable memories and at Odyssey.
          </p>
          <div className="w-full h-full flex items-center justify-start pl-[2vmax]">
            <Circle title="10k">Followers on social media handles over</Circle>
          </div>
        </div>

        <div className="w-full grid grid-cols-3">
          <div className="w-full h-full flex items-center justify-center pr-[2vmax]">
            <Circle title="">
              Engagement of over{' '}
              <span className="block text-[5vw] my-[-1vw] pt-0 font-bold">500</span>
              institutions
            </Circle>
          </div>
          <div className="relative h-72">
            <Image src="/lotus.svg" alt="illustration" fill />
          </div>
          <div className="w-full h-full flex items-center justify-center pl-[2vmax]">
            <div className="w-[15vw] h-[15vw] bg-[#B8215A] border border-[#000] pt-5 p-5 md:pt-0 rounded-full flex flex-col justify-center items-center text-center text-[white]">
              <p className="text-[1.7vw] leading-tight">Footfall over<h3 className="text-[5vw] mt-[1vw] font-bold">30k</h3></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialValidation;
