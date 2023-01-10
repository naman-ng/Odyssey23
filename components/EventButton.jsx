import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';

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
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
};

const EventButton = ({ name, list, image }) => {
  const [modal, isModal] = useState(false);
  const [event, setEvent] = useState(null);
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => isModal(false)}
        contentLabel={name}
        style={customStyles}
      >
        <div
          className="relative bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.6)),url(${image})`,
          }}
        >
          {!event ? (
            <div className="py-24 px-10 md:py-36 md:px-24 mx-auto flex flex-col justify-center">
              {list.map((item, index) => (
                <div
                  onClick={() => setEvent(item)}
                  className="md:min-w-[250px] inline-flex p-4 rounded-2xl mt-6 text-[#fff] font-semibold bg-[#09988F] cursor-pointer "
                >
                  <span className="w-full text-center">{item.eventName}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 px-8 md:py-36 md:px-24 mx-auto flex flex-col justify-center items-center w-[60vmax] md:w-[50vmax] lg:w-[30vmax]">
              <img
                src="cross.svg"
                className="w-[3vmax] cursor-pointer"
                onClick={() => setEvent(null)}
              />
              <div className="md:min-w-[250px] inline-flex p-4 rounded-2xl mt-6 text-[#fff] font-semibold bg-[#09988F]">
                <span className="w-full text-center">{event.eventName}</span>
              </div>
              <p className="text-[white] my-3">{event.description}</p>
              <Link
                className="min-w-[250px] inline-flex p-4 rounded-2xl mt-6 text-[#fff] font-semibold bg-[#09988F]"
                href={event.registrationLink}
                target="_blank"
              >
                <span className="w-full text-center">Register Now</span>
              </Link>
            </div>
          )}
        </div>
      </Modal>

      <button
        className={`font-bold xl:text-xl lg:text-xl sm:text-xs 2xl:text-[1.2vw] mt-[2vw] xl:p-1 lg:p-1 md:p-1 sm:p-1 2xl:p-0 2xl:h-[2vw] 2xl:w-[8vw] bg-[#f9f9f984] hover:bg-[#f9f9f9e9] rounded-lg  text-[1.72vw] leading-[4vw]translate-y-[1vw] duration-[1000ms] h-[3vw] w-[13vw] sm:h-[3vw] sm:w-[12vw] transform transition-all
                     `}
        type="button"
        onClick={() => isModal(true)}
      >
        List Events
      </button>
    </>
  );
};

export default EventButton;
