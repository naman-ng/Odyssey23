import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='absolute pl-[2%] w-full z-40 font-mulish text-[white]  p-[1vmax] flex justify-between'>
      <div className='flex justify-between w-[35%] md:w-[30%] 2xl:w-[28%] lg:text-[1.3vmax] sm:text-[1vmax]  text-[0.9vmax]  xl:text-[1.5vmax]  md:text-[1.1vmax] md:w-[35%]'>
        <Link href='/Home' className=' md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110'>Home</Link>
        <Link href='/Events' className=' md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110'>Events</Link>
        <Link href='/ContactUs' className=' md:hover:text-[#fa526e] duration-200 md:hover:font-bold md:hover:transition-all md:hover:scale-110'>Contact Us</Link>
      </div>

      <div className='flex justify-end w-2/6 space-x-4'>
        <Link target='_blank'
              className='transform transition duration-500 lg:hover:scale-125'
              href='https://www.facebook.com/odyssey.iiitd'>
            <Image alt='facebook'
                  src='/Facebook.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"2.75vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 lg:hover:scale-125 '
              href='https://www.instagram.com/iiitdodyssey/'>
          <Image alt='instagram'
                  src='/Instagram.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"3vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 lg:hover:scale-125 '
              href='https://twitter.com/IIITDOdyssey'>
          <Image alt='twitter'
                  src='/Twitter.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"3vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 lg:hover:scale-125 '
              href='https://www.linkedin.com/company/iiitdodyssey/mycompany/'>
          <Image alt='linkedin'
                  src='/LinkedIn.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"3vmax",
                  }}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar