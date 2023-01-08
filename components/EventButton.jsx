import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';
import { Tooltip } from 'react-tippy';

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

const EventButton = ({ name, isExpanded, list,image }) => {
  const [modal, isModal] = useState(false);

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => isModal(false)}
        contentLabel={name}
        style={customStyles}
      >
        <div className="relative bg-[url(/events/event_dance.png)] bg-center bg-cover bg-no-repeat bg-transparent" 
             style={{backgroundImage:`url(${image})`}}>
          <div className="py-24 px-16 md:py-36 md:px-24 mx-auto flex flex-col justify-center">
            {list.map((item, index) => (
              <Tooltip
                key={item.name}
                title={item.description}
                position="top"
                trigger="mouseenter"
                arrow
              >
                <Link
                  href={item.registrationLink}
                  className="min-w-[250px] inline-flex p-4 rounded-2xl mt-6 text-[#fff] font-semibold"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 185, 173, 0.3) 0%, rgba(0, 185, 173, 0.7) 100%)',
                  }}
                >
                  <span className="w-full text-center">{item.eventName}</span>
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </Modal>

      <button
        className={`font-bold xl:text-xl lg:text-xl sm:text-xs mx-5  2xl:text-[1.2vw] mt-[2vw] xl:p-1 lg:p-1 md:p-1 sm:p-1 2xl:p-0 2xl:h-[2vw] 2xl:w-[8vw] bg-[#f9f9f984] hover:bg-[#f9f9f9e9] rounded-lg  text-[1.72vw] h-[3.4vw] w-[12vw] leading-[4vw]
                    ${
                      isExpanded
                        ? 'translate-y-[1vw] duration-[1000ms] h-[3vw] w-[13vw] sm:h-[3vw] sm:w-[12vw] '
                        : 'translate-y-[-1vw] duration-[1000ms] '
                    }  transform transition-all
                     `}
        type="button"
        onClick={() => isModal(true)}
      >
        All Events
      </button>
    </>
  );
};

export default EventButton;
