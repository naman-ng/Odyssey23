import Hero from "./sections/Hero";
import ValueProposition from "./sections/ValueProposition";
import SocialValidation from "./sections/SocialValidation";


function Home() {
  return (
    <div className="bg-sky z-0 font-mulish flex flex-col text-xl text-black pt-20">
      <Hero />
      <ValueProposition />
      <SocialValidation/>
    </div>
  );
}

export default Home;
