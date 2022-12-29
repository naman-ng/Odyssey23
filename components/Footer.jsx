import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    name: "LinkedIn",
    url: "https://linkedin.com/",
  },
];
function Footer() {
  return (
    <>
      <footer className="pt-48 md:pt-[49vh] md:pb-10 relative flex flex-col justify-center w-full bg-[url('/footer.svg')] bg-[#1C1E56] bg-no-repeat bg-left bg-contain ">
        <div className="w-full flex justify-center">
          <div className="h-[18vh] md:h-[12vh] w-11/12 md:w-full relative -mt-[2vmax]">
            <Image src="/Logo.svg" alt="logo" fill />
          </div>
        </div>

        <div className="md:mt-14 px-[2.5vmax] md:px-0 grid md:flex justify-around pb-[4vmax]">
          <div className="my-10 md:my-0 flex flex-col order-2 md:order-1 md:w-[60%] w-[90%] -ml-[0vmax]">
            <h5 className="text-[white] text-[1.2vmax]">
              Indian Institute of Information Technology,
              <br /> Delhi Okhla Industrial Estate, <br />
              Phase III Near Govind Puri Metro Station
              <br /> New Delhi, Delhi 110020
            </h5>

            <div className="mt-5 flex  items-center">
              {socials.map((social) => (
                <Link href={social.url} target="_blank">
                  <Image
                    src={`/${social.name}.svg`}
                    alt={social.name}
                    className="hover:scale-110 transition-all mx-1"
                    width={0}
                    height={0}
                    style={{
                      width: "2.5vmax",
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:justify-end md:mr-[2vmax] text-[1vmax] order-1 md:order-2 text-[white]">
            <div className="md:border-l md:pl-[2.5vmax] flex flex-col">
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
        <Image src="/footerStrip.svg" alt="footer" width={0} height={0} style={{
          width: "100%",
        }} />
      </div>
    </>
  )
}

export default Footer