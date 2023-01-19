import React, { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

function Spons({ name, front_img, back_img, link, title, logo, number }) {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  let bh = 0;
  useEffect(() => {
    bh = Math.floor(number / 9) * 200;
    if (number % 9 > 4) {
      bh += 100;
    }
    setBottom(bh);
  }, []);

  let lh = 10;
  useEffect(() => {
    if ((number - 5) % 9 == 0) {
      setLeft(lh);
    }
    if ((number + 1) % 9 == 0) {
      setRight(lh);
    }
  }, []);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const frontStyle = {
    height: 'fit-content',
    width: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  };

  const backStyle = {
    height: 'fit-content',
    width: '100%',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
    display: 'grid'
  };

  const cardStyle = {
    width: '18%',
    height: '351px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 1s',
    bottom: `${bottom}px`,
    marginLeft: `${left}%`,
    marginRight: `${right}%`,
  };

  const smallCard = {
    width: '60%',
    height: '250px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 1s',
    margin: '20px auto',
  };

  if (name.length > 1) {
    return (
      <div className={styles.card} style={windowSize >= 768 ? cardStyle : smallCard}>
        <div className="" style={frontStyle}>
          <img src={`${front_img}`} alt="" className="sm:w-full lg:w-full lg:h-full" />
          {logo===""?
            <></>
          :
            <img
              src={`${logo}`}
              alt="404"
              className="w-2/5"
              style={{position: 'absolute', top: '50%', left: '30%', transform: 'translateY(-50%)'}}
            />
          }
        </div>
        <div className="" style={backStyle}>
          <img src={`${back_img}`} alt="" className="sm:w-full lg:w-full lg:h-full" style={{gridColumn: 1, gridRow: 1}} />
          
            <div className="flex flex-col justify-center align-middle text-center z-50" style={{gridColumn: 1, gridRow: 1}} >
              <a href={`${link}`} target='_blank'><p className=" w-full lg:text-xl sm:text-sm">{title}</p>
              <p className=" w-full text-[#FFFFFF] lg:text-xl sm:text-sm">{name}</p></a>
            </div>
          
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.card} style={windowSize >= 768 ? cardStyle : smallCard}>
        <div className="" style={frontStyle}>
          <img src="/emptySpons.png" alt="" className="w-full h-full" />
        </div>
        <div className="" style={backStyle}>
          <img src="/emptySpons.png" href="" alt="" className="w-full h-full" />
        </div>
      </div>
    );
  }
}

export default Spons;
