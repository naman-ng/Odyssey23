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
    height: '100%',
    width: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  };

  const backStyle = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
  };

  const cardStyle = {
    width: '18%',
    height: '301px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 1s',
    bottom: `${bottom}px`,
    marginLeft: `${left}%`,
    marginRight: `${right}%`,
  };

  const smallCard = {
    width: '60%',
    height: '301px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 1s',
    margin: '20px auto',
  };

  if (name.length > 1) {
    return (
      <div className={styles.card} style={windowSize >= 768 ? cardStyle : smallCard}>
        <div className="" style={frontStyle}>
          <img src={`${front_img}`} alt="" className="w-full h-full" />
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
          <img src={`${back_img}`} alt="" className="w-full h-full" />
          
            <div className="flex flex-col justify-center align-middle text-center z-50 -translate-y-52 translate-x-[1.75rem] w-4/5 h-2/5 absolute top-3/5">
              <a href={`${link}`} target='_blank'><p className=" w-full text-xl">{title}</p>
              <p className=" w-full text-[#FFFFFF] text-xl">{name}</p></a>
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
