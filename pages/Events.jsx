import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import Image from 'next/image';
function Events() {
  const eventList = [
    {
      name: 'Lifestyle',
      tagline: 'Join the fashion elite at our exclusive fest events.',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#B8215A',
      image: '/images/event_lifestyle.png',
      align: 0,
      knowmoreList: [
        {eventName: 'Makeup Event', description: 'makeup artists can flaunt their abilities and use this opportunity to display their artistic makeup skills to judges, and of course an audience.', registrationLink: 'https:\\/\\/docs.google.com\\/forms\\/d\\/e\\/1FAIpQLScMb3zt5hz2iW18SX-2kOUTAsiKSAp6wISmJol2ZkGYVcWufQ\\/viewform?usp=sharing'},
        {eventName: 'Reverbe', description: 'Each college competes by showing off their fashion sense and grace. Walk a catwalk wearing your line and let your clothes tell us why you deserve to win', registrationLink: 'https:\\/\\/docs.google.com\\/forms\\/d\\/e\\/1FAIpQLSfoBz7n1zU-zpRdh-n0zxrDNpR49BOvKHvORhiIFt7d8m4bCw\\/viewform?usp=pp_url'},
        {eventName: 'Trashion', description: 'Trashion is fashion but with thrown-out, found, and repurposed elements, basically trash. Simply, it is making Haute Couture from everyday trash!', registrationLink: 'https:\\/\\/docs.google.com\\/forms\\/d\\/e\\/1FAIpQLSe7UTdNHbW_to2F1j7K5K8uYv69J3gkGoYJ0Oq5qtYU0BC64w\\/viewform'}
        ]
    },
    {
      name: 'Quizzing',
      tagline: 'Are you ready to face off against other trivia enthusiasts? Join us!',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#EE2D69',
      image: '/images/event_quizzing.png',
      align: 1,
      knowmoreList: [
        {eventName: 'Meta Mera Data Leta', description: 'Expect anything and everything from Zomato ads to Elon Musk’s tweet references to String Theory parodies and of course, data theft. The quiz will have a little bit of everything from science, business, technology and their&nbsp;intersections.\n', registrationLink: 'https:\\/\\/forms.gle\\/TmXHjFZz39kvtyLL9'},
        {eventName: "General Tso's : A General Quiz", description: 'Whether you’re a comic book fan, adore classical literature, are into the newer artists, jam to the old-school bands, or are a mythology buff or a major foodie, we can assure you that you’ll fit right in with in with the general quiz!\n', registrationLink: 'https:\\/\\/forms.gle\\/TmXHjFZz39kvtyLL9'},
        {eventName: 'Netflix met DRS: A SPENT  Quiz', description: 'Be it about Harry Maguire defending or Will Smith’s Oscars tragedy, you should be ready for anything. This quiz invites all sorts of crowds, from e-sport gamers to Bollywood fans.\n', registrationLink: 'https:\\/\\/forms.gle\\/TmXHjFZz39kvtyLL9'},
        {eventName: 'On MELAncholy Hill', description: 'From Linkin Park to Led Zeppelin, Banksy to Botticelli, and Tarantino to Truffaut, if you feel all that time glossing over movies, weird music and literature facts was a waste of time, then this is the quiz where you put all those ‘wasted hours’&nbsp;to&nbsp;the&nbsp;test.', registrationLink: 'https:\\/\\/forms.gle\\/TmXHjFZz39kvtyLL9'}
        ]
    },
    {
      name: 'Dance',
      tagline: 'Experience the thrill of the dance floor at our fest event.',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#00B9AD',
      image: '/images/event_dance.png',
      align: 0,
      knowmoreList: [
        {eventName: 'Can You Du-et?', description: 'Can You Du-et? : "Be So Good They Can\'t Ignore You", is a duo western dance competition where we challenge you to make the audience dance to your beats!', registrationLink: 'https:\\/\\/forms.gle\\/MoY5GvHpzkXALGts8'},
        {eventName: 'Battle Troupe ', description: 'Battle Troupe: "Connect with your passion and burn up the dance floor with your Troupe", is a western group dance competition where the dance societies of delhi compete with each other with their choreography, rhythm and synchronization.  ', registrationLink: 'https:\\/\\/forms.gle\\/v2vUFqzc68aTfvSy7'},
        {eventName: 'Thematic Dance', description: 'Thematic is a group dance event where a social concern is addressed with dance. There are no particular themes for this event. Teams can perform on any theme they want. Mostly, we expect choreography societies of colleges to participate in this event.', registrationLink: 'https:\\/\\/forms.gle\\/DDF9sey2kqcucBAz5'},
        {eventName: 'Street Dance', description: 'Group Dance event, teams of 10-20 people would be required to perform any of the street dance styles: Hip Hop, Popping, Tutting, Krumping, Bboying, Stepping, Break Dance, Contraptions and Western Freestyle', registrationLink: 'https:\\/\\/forms.gle\\/uRSgDqgSBB62p1XD9'},
        {eventName: 'Verve', description: 'Verve : "We Only Speak In Dance" , is a solo dance competition with only western styles like Hip-Hop, Bboying, Jazz, Contemporary, etc., allowed where you can showcase your verve for dance.', registrationLink: 'https:\\/\\/forms.gle\\/dz6Ejtpy3kPM5UxH6'}
        ]
    },
    {
      name: 'Music',
      tagline: 'Experience the thrill of the dance floor at our fest event.',
      knowmore:
        'Details of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events of events.',
      bg: '#00B9AD',
      image: '/images/event_music.png',
      align: 0,
      knowmoreList: [
        {eventName: 'Arpeggio', description: 'Arpeggio is a musical bonanza for all solo instrumentalists, where we pit musicians of varied genres in a mouthwatering battle against one another and give them their worthy stage to stand out and shine.', registrationLink: 'https:\\/\\/forms.gle\\/YaHVaydVR7FYAjaCA'}, 
        {eventName: 'Anime Karaoke no Yoru', description: 'description', registrationLink: 'https:\\/\\/forms.gle\\/WgqV5wQotzLT8nhk7'}, 
        {eventName: 'FlipIt', description: 'description', registrationLink: 'https:\\/\\/forms.gle\\/TxRGUrtZ7NBNH35j7'}, 
        {eventName: 'Encore Indian', description: 'Encore Indian is a solo classical singing event that gives all the talented musicians out there a chance to showcase their skills and mastery over the magnificent art form of Indian Classical Music.', registrationLink: 'https:\\/\\/forms.gle\\/k2yUA67EAvUp4H8L8'}, 
        {eventName: 'Encore Western', description: 'description', registrationLink: ' https:\\/\\/docs.google.com\\/forms\\/d\\/1YOB7oxNHhYUlEKnEsP-J14DklfbmZRE4gOuZIBFDHVw\\/edit?ts=63a44954'}, 
        {eventName: 'Schism: Battle of Bands', description: 'description', registrationLink: 'https:\\/\\/forms.gle\\/Anez3tpkF8TCAyoN9'}, 
        {eventName: 'Acapella', description: "The battle between harmonies without any kareoke or backing instruments but just your homies will bring out the best of your vocals in the flagship event Acapella at ODYSSEY 23'", registrationLink: 'https:\\/\\/forms.gle\\/5NFBNCfs17pdJ8KUA'}, 
        {eventName: 'Rap Battle', description: 'description', registrationLink: 'link'}
      ]
    }
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <div className="">
      <video loop autoPlay muted className="h-full w-full object-cover rounded-[1.5vmax]">
        <source src={'/shortLoader.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div className="gradient-blue h-auto  justify-center w-full  font-mulish flex flex-col  sm:pt-[5vmax] md:pt-[5vmax] xl:pt-[5vmax] lg:pt-[5vmax] pt-[6.6vmax] overflow-clip  text-[#F9F9F9] ">
      {eventList.map((event, i) => (
        <main>
          <Event
            name={event.name}
            tagline={event.tagline}
            knowmore={event.knowmore}
            bg={event.bg}
            image={event.image}
            align={event.align}
            key={i}
            knowmoreList={event.knowmoreList}
          />
          {/* <img className='w-screen mb-[-0.1vw] mt-[0.1vw]' src="/images/tealborder.png" 
                    style={{  width: "100%" }}  /> */}
        </main>
      ))}
    </div>
  );
}

export default Events;
