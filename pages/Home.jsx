import Hero from './sections/Hero';
import ValueProposition from './sections/ValueProposition';
import SocialValidation from './sections/SocialValidation';
import { useState, useEffect } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <div className="">
      <video loop autoPlay muted className="h-[100vh] w-full object-cover">
        <source src={'/shortLoader.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div
      style={{
        background: 'linear-gradient(180deg, #1C175F 1.24%, #F37533 10.25%)',
        // backgroundSize: "cover",
      }}
      className="z-0 font-mulish flex flex-col text-xl text-black pt-[3vmax] overflow-clip"
    >
      <Hero />
      <ValueProposition />
      <SocialValidation />
    </div>
  );
}

export default Home;
