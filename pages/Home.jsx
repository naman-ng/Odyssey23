import Hero from './sections/Hero';
import ValueProposition from './sections/ValueProposition';
import SocialValidation from './sections/SocialValidation';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { PlaystationX } from 'tabler-icons-react';
import { Context } from "./_app";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'fit-content',
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '2vw',
    padding: '0px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    zIndex: '200',
  },
};

function Home() {
  const {modal, isModal} = useContext(Context);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #1C175F 1.24%, #F37533 10.25%)",
        // backgroundSize: "cover",
      }}
      className="z-0 font-mulish flex flex-col text-xl text-black pt-[3vmax] overflow-clip"
    >      
      <Hero />
      <ValueProposition />
      <SocialValidation />

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
          style={{ fill: "#e83d69", position: 'fixed', right: '1vw', top: '1vh' }}
          size={'4vw'}
          strokeWidth={1}
          onClick={() => isModal(false)}
        />
        <img src="Star_website.png" />
      </Modal>
    </div>
  );
}

export default Home;
