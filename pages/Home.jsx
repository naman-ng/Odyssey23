import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Hero from "./sections/Hero";
import ValueProposition from "./sections/ValueProposition";
const Dhol = dynamic(() => import("../components/Dhol"), { ssr: false });

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
  },
];

const Circle = ({ title, children }) => (
  <div className="w-fit h-fit bg-[#B8215A] border border-[#000] p-5 rounded-full text-center">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm leading-tight">{children}</p>
  </div>
);

function Home() {
  return (
    <div className=" bg-sky realtive z-0 font-mulish flex flex-col justify-center items-center">
      <Hero />
      <ValueProposition />

      <div className="flex flex-col justify-center items-center h-screen w-full"></div>

      <div>
        <div></div>
        <div></div>
      </div>

      <p></p>

      <div></div>

      <div></div>

      <p></p>

      <Dhol />

      <div className="w-full bg-[#1C1E56] py-28">
        <div className="w-full mb-20 grid grid-cols-4">
          <div className="w-full h-full flex items-center justify-center">
            <Circle title="30k">
              Accounts <br />
              reached
            </Circle>
          </div>
          <p className="text-center col-span-2">
            Lorem ipsum dolor sit amet consectetur. Aliquam proin etiam nisi
            egestas ultricies pulvinar cum. Tortor eu adipiscing viverra
            scelerisque scelerisque neque elit. Phasellus sed cras aliquam
            placerat faucibus. Vestibulum eget eget nulla adipiscing. Tincidunt
            nec sed massa lectus tempus. Mauris lorem consequat sit tellus vitae
            nunc auctor.Lorem ipsum dolor sit amet consectetur. Aliquam proin
            etiam nisi egestas ultricies pulvinar cum. Tortor eu adipiscing
            viverra scelerisque scelerisque neque elit. Phasellus sed cras
            aliquam placerat faucibus.
          </p>
          <div className="w-full h-full flex items-center justify-center">
            <Circle title="30k">
              Accounts <br />
              reached
            </Circle>
          </div>
        </div>

        <div className="w-full grid grid-cols-3">
          <div className="w-full h-full flex items-center justify-center">
            <Circle title="30k">
              Accounts <br />
              reached
            </Circle>
          </div>
          <div className="relative h-72">
            <Image src="/lotus.svg" alt="illustration" fill />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Circle title="30k">
              Accounts <br />
              reached
            </Circle>
          </div>
        </div>
      </div>

      <footer className="pt-48 md:pt-80 md:pb-10 relative w-full bg-[url('/footer.svg')] bg-[#1C1E56] bg-no-repeat bg-center bg-auto">
        <div className="w-full flex justify-center">
          <div className="h-36 md:h-24 w-11/12 md:w-full relative">
            <Image src="/Logo.svg" alt="logo" fill />
          </div>
        </div>

        <div className="mt-14 px-10 md:px-20 grid md:grid-cols-2">
          <div className="my-10 md:my-0 flex flex-col order-2 md:order-1">
            <h5 className="text-[#BCBCBC]">
              Indian Institute of Information Technology,
              <br /> Delhi Okhla Industrial Estate, <br />
              Phase III Near Govind Puri Metro Station
              <br /> New Delhi, Delhi 110020
            </h5>

            <div className="mt-5 flex items-center">
              {socials.map((social) => (
                <Link href={social.url} target="_blank">
                  <Image
                    src={`/${social.name}.svg`}
                    alt={social.name}
                    className="hover:scale-110 transition-all mx-1"
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:justify-end md:mr-10 order-1 md:order-2">
            <div className="md:border-l md:pl-8 flex flex-col">
              <Link href="/teams" className="mb-3 hover:underline">
                TEAMS
              </Link>
              <Link href="/sponsors" className="my-3 hover:underline">
                SPONSORS
              </Link>
              <Link href="/events" className="my-3 hover:underline">
                EVENTS
              </Link>
              <Link href="/contact" className="mt-3 hover:underline">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full">
        <Image src="/footerStrip.svg" alt="footer" width={1920} height={300} />
      </div>
    </div>
  );
}

export default Home;
