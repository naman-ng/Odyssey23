import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { PlaystationX } from "tabler-icons-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
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
          }}
        >
          {!event ? (
            <div className="py-24 px-16 md:py-36 md:px-20 mx-auto flex flex-col justify-center">
              <center>
              <PlaystationX
                className="sm:w-[10vw] cursor-pointer hover:w-[2vw] transition-all duration-300 mb-3"
                color="white"
                style={{ fill: "#e83d69" }}
                size={40}
                strokeWidth={1}
                onClick={() => isModal(false)}
              />
              </center>
              {list.map((item, index) => (
                <div
                  onClick={() => setEvent(item)}
                  className="md:min-w-[250px] inline-flex p-3 md:p-4 rounded-xl mb-6 hover:text-[#ffffff] text:[#e83d69] font-semibold hover:bg-[#e83d69] bg-[#f9f9f990] cursor-pointer transition-all duration-300"
                >
                  <span className="w-full text-center text-sm md:text-base">
                    {item.eventName}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 px-8 md:py-24 md:px-24 mx-auto flex flex-col justify-center items-center w-[50vmax] lg:w-[30vmax]">
              <PlaystationX
                className="sm:w-[10vw] cursor-pointer hover:w-[3vw] transition-all duration-300"
                color="white"
                style={{ fill: "#e83d69" }}
                size={60}
                strokeWidth={1}
                onClick={() => setEvent(null)}
              />
              <div className="md:min-w-[250px] inline-flex p-3 md:p-4 rounded-2xl mt-6 text-[#fff] font-semibold bg-[#e83d69]">
                <span className="w-full text-center">{event.eventName}</span>
              </div>
              <p
                className="text-[white] my-3"
                style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: 20 }}
              >
                {event.description}
              </p>
              {event.registrationLink===""?<></>:
                <Link
                  className="min-w-[200px] inline-flex p-4 rounded-md mt-6 text-[#ffffff] font-semibold hover:bg-[#e83d69] bg-[#00000090] transition-all duration-500"
                  href={event.registrationLink}
                  target="_blank"
                >
                  <span className="w-full text-center">Register Now</span>
                </Link>
              }
            </div>
          )}
        </div>
      </Modal>

      <button
        className={`font-bold xl:text-xl lg:text-xl sm:text-[1.75vw] 2xl:text-[1.2vw] mt-[3vw] xl:p-1 lg:p-1 md:p-1 sm:p-0 2xl:p-0 2xl:h-[3vw] 2xl:w-[10vw] bg-[#f9f9f984] hover:bg-[#e83d69] hover:text-[#ffffff] rounded-lg text-[1.72vw] leading-[3vw] translate-y-[1vw] duration-[300ms] h-[3vw] w-[13vw] sm:h-[4vw] sm:w-[15vw] transform transition-all`}
        type="button"
        onClick={() => isModal(true)}
        style={{boxShadow: '1px 1px 15px rgba(0,0,0,0.5)'}}
      >
        Explore
      </button>
    </>
  );
};

export default EventButton;
