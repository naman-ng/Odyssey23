import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { ChevronsDown, ChevronsUp } from "tabler-icons-react";
import { Context } from "../pages/_app";
import Modal from "react-modal";
import { PlaystationX } from "tabler-icons-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "fit-content",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "2vw",
    padding: "0px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: "200",
  },
};

function Navbar() {
  const { modal, isModal } = useContext(Context);
  const { modal2, isModal2 } = useContext(Context);
  const [social, isSocial] = useState(true);

  return (
    <nav className="absolute w-full z-40 font-mulish text-[#FECCCC]  p-[1vmax] flex justify-between gradient-nav">
      <Modal
        isOpen={modal}
        onRequestClose={() => isModal(false)}
        contentLabel={"Star"}
        style={customStyles}
        closeTimeoutMS={500}
      >
        <PlaystationX
          className="cursor-pointer transition-all duration-300"
          color="white"
          style={{
            fill: "#e83d69",
            position: "fixed",
            right: "1vw",
            top: "1vh",
          }}
          size={"4vw"}
          strokeWidth={1}
          onClick={() => isModal(false)}
        />
        <img src="Star_website.webp" />
      </Modal>
      <Modal
        isOpen={modal2}
        onRequestClose={() => isModal2(false)}
        contentLabel={"Star2"}
        style={customStyles}
        closeTimeoutMS={500}
      >
        <PlaystationX
          className="cursor-pointer transition-all duration-300"
          color="white"
          style={{
            fill: "#e83d69",
            position: "fixed",
            right: "1vw",
            top: "1vh",
          }}
          size={"4vw"}
          strokeWidth={1}
          onClick={() => isModal2(false)}
        />
        <img src="AkhilGurleen_website.webp" />
      </Modal>
      <div
        className="flex justify-around items-center w-[100%] lg:text-[1.3vmax] sm:text-[1vmax]  text-[0.9vmax]  xl:text-[1.5vmax]  md:text-[1.1vmax] pt-[1.5vh] pb-[1.5vh]"
        style={{ backgroundColor: "rgba(0,0,0,0.4)", borderRadius: "1rem" }}
      >
        <Link
          href="/Events"
          className="w-[20%] text-center md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110"
        >
          Events
        </Link>
        <Link
          href="/Sponsors"
          className="w-[20%] text-center md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110"
        >
          Sponsors
        </Link>
        <div className="w-[20%]"></div>
        <Link
          className="fixed transform transition duration-500 lg:hover:scale-125  md:hover:transition-all md:hover:scale-110"
          href="/"
        >
          <Image
            alt="facebook"
            src="/Symbol.svg"
            width={0}
            height={0}
            style={{
              width: "2.75vmax",
            }}
          />
        </Link>
        <Link
          href="/ContactUs"
          className="w-[20%] text-center md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110"
        >
          Contact Us
        </Link>
        <Link
          href="http://bit.ly/odysseypass"
          target="_blank"
          className="w-[20%] text-center md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110"
        >
          Entry Pass
        </Link>
      </div>

      {social ? (
        <div className="fixed bottom-5 right-5">
          <ChevronsDown
            className="cursor-pointer"
            color="#fa526e"
            size="5vh"
            strokeWidth={2}
            style={{
              width: "2.75vmax",
            }}
            onClick={() => isSocial(false)}
          />
          <Link
            target="_blank"
            className="transform transition duration-500 lg:hover:scale-125"
            href="https://www.facebook.com/odyssey.iiitd"
          >
            <Image
              alt="facebook"
              src="/Facebook.svg"
              width={0}
              height={0}
              className="bg-[rgba(255,255,255,0.5)] hover:bg-[#ffffff] transition-all duration-300"
              style={{
                width: "2.75vmax",
                borderRadius: "100%",
                marginTop: "1vh",
              }}
            />
          </Link>
          <Link
            target="_blank"
            className="transform transition duration-500 lg:hover:scale-125 "
            href="https://www.instagram.com/iiitdodyssey/"
          >
            <Image
              alt="instagram"
              src="/Instagram.svg"
              width={0}
              height={0}
              className="bg-[rgba(255,255,255,0.5)] hover:bg-[#ffffff] transition-all duration-300"
              style={{
                width: "3vmax",
                borderRadius: "100%",
                marginTop: "1vh",
              }}
            />
          </Link>
          <Link
            target="_blank"
            className="transform transition duration-500 lg:hover:scale-125 "
            href="https://twitter.com/IIITDOdyssey"
          >
            <Image
              alt="twitter"
              src="/Twitter.svg"
              width={0}
              height={0}
              className="bg-[rgba(255,255,255,0.5)] hover:bg-[#ffffff] transition-all duration-300"
              style={{
                width: "3vmax",
                borderRadius: "100%",
                marginTop: "1vh",
              }}
            />
          </Link>
          <Link
            target="_blank"
            className="transform transition duration-500 lg:hover:scale-125 "
            href="https://www.linkedin.com/company/iiitdodyssey/mycompany/"
          >
            <Image
              alt="linkedin"
              src="/LinkedIn.svg"
              width={0}
              height={0}
              className="bg-[rgba(255,255,255,0.5)] hover:bg-[#ffffff] transition-all duration-300"
              style={{
                width: "3vmax",
                borderRadius: "100%",
                marginTop: "1vh",
              }}
            />
          </Link>
        </div>
      ) : (
        <div className="fixed bottom-5 right-5">
          <ChevronsUp
            className="cursor-pointer"
            color="#fa526e"
            size="5vh"
            strokeWidth={2}
            style={{
              width: "2.75vmax",
            }}
            onClick={() => isSocial(true)}
          />
        </div>
      )}

      <div className="fixed bottom-5 left-5 cursor-pointer updown2" style={{display: 'flex'}}>
        {modal ? (
          <></>
        ) : (
          <Image
            src="/SS_Live.png"
            width={500}
            height={500}
            style={{
              width: "10vmax",
            }}
            onClick={() => isModal(true)}
          />
        )}
        {modal2 ? (
          <></>
        ) : (
          <Image
            src="/Akhil&Gurleen.png"
            width={500}
            height={500}
            style={{
              width: "10vmax",
            }}
            onClick={() => isModal2(true)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
