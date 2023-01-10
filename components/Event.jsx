import EventButton from './EventButton';
function Event({ name, tagline, bg, image, align, knowmore, knowmoreList }) {
  let alignVal = align % 2 === 0 ? 'left' : 'right';
  return (
    <>
      <div
        className={` leading-[4vw] sm:h-[36vw] md:h-[36vw] lg:h-[31vw] xl:h-[28.0vw] h-[37vw] w-screen transition-timing-function-[ease-in]  rounded-t-lg -mt-2 shadow-lg translate-y-[0.1vw] duration-[1000ms] transform transition-all `}
        style={{ backgroundColor: bg, border: '1px solid #000000' }}
      >
        {name && (
          <img
            className={`  drop-shadow-[5px_5px_0px_#000] sm:h-[35vw] md:h-[35vw] lg:h-[30vw] xl:h-[27.4vw] h-[36vw] translate-y-[0.1vw] duration-[1000ms] transform transition-all ${
              alignVal === 'left'
                ? '2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-20 ml-8 mr-[6vw]'
                : ' xl:mr-[15vw] mr-[8vw] '
            } `}
            src={image}
            alt="image"
            style={{ float: alignVal }}
          />
        )}
        <div
          className={`ml-[10vw] xl:mt-[6vw]  mr-[8vw] lg:mt-[3vw] md:mt-[4vw] sm:mt-[2.4vw] mt-[6vw] leading-[5vw] `}
        >
          <div
            className={`  translate-y-[0.1 vw] duration-[1200ms] 2xl:text-5xl  lg:text-2xl md:text-xl xl:text-3xl sm:text-xl text-[5.5vw] `}
          >
            {name}
          </div>
          <div
            className={`font-italic mt-1 mr-[1vw] text-[1.5vw] leading-[2.5vw] transition-delay-[10s] translate-y-[1vw] duration-[100ms] lg:text-xl sm:text-xs md:text-xs sm:mr-5 2xl:text-xl `}
          >
            {knowmore}
          </div>
          <div className="btn" style={{ color: bg }}>
            {name && (
              <EventButton name={name} image={image} list={knowmoreList} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Event;
