import React, { useState } from 'react';
import Reveal from '../../components/Reveal';
import Gallery from '../../components/Gallery';
import dynamic from 'next/dynamic';
const Dhol = dynamic(() => import('../../components/Dhol'), { ssr: false });
// import Modal from 'react-modal';
// import { useInView } from 'react-intersection-observer';
// import { CSSTransition } from 'react-transition-group';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    zIndex: '200',
  },
};

function ValueProposition() {
  // const [modal, isModal] = useState(false);

  // const { ref, inView, entry } = useInView({
  //   onChange: (inView, entry) => {
  //     if (inView) isModal(true);
  //     else isModal(false);
  //   },
  // });

  return (
    <div className="relative flex flex-col justify-start items-center w-full gradient text-center font-mulish color-[black] ">
      <p className="w-[70%] lg:w-[37%] text-[1.3vmax] text-black mt-[18vw] mb-[20vw]">
        IIIT Delhi's Odyssey celebrates the essence and beauty of culture and of
        it's arts. It celebrates the Actor, the Dancer, the Musician, the Writer
        and the Designer, with over 45 events and a footfall of 25,000+.{' '}
      </p>
      <Gallery />
      <p
        className="w-[70%] lg:w-[37%] text-[1.2vmax] text-black -mt-[17vw] mb-[-168vw]"
        // ref={ref}
      >
        Odyssey is incomplete without the epic star-studded night where
        everybody gets to unwind and end the fest on a high - The Nirvana Night.
        It has continued to be a highlight of the two-day extravaganza since its
        inception while also managing to be an absolute crowd-puller. The
        footfall is immense, and the euphoria of Nirvana Night beats everything
        else. With artists like Jubin Nautiyal, Hardy Sandhu, Zakir Khan, and
        Prateek Kuhad gracing the stage in previous editions of Odyssey, the bar
        is set high, and this year it's only gonna be bigger and better!
      </p>
      <Reveal />

      {/* <CSSTransition in={modal} timeout={300} classNames="dialog">
        <Modal
          isOpen={modal}
          onRequestClose={() => isModal(false)}
          contentLabel={'Star'}
          style={customStyles}
          closeTimeoutMS={500}
        >
          <img src="Star_website.png" />
        </Modal>
      </CSSTransition> */}
      <Dhol />
    </div>
  );
}

export default ValueProposition;
