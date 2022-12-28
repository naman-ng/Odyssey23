import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='absolute w-full z-20 font-mulish p-5 flex justify-between'>
      <div className='flex justify-between w-1/6'>
        <Link href='/Home'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Events'>Events</Link>
        <Link href='/Sponsors'>Sponsors</Link>
        <Link href='/Team'>Team</Link>
      </div>

      <div className='flex justify-end w-1/6 space-x-4'>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.facebook.com/odyssey.iiitd'>
            <Image alt='facebook'
                  src='/Facebook.svg'
                  width={30}
                  height={30}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.instagram.com/iiitdodyssey/'>
          <Image alt='instagram'
                  src='/Instagram.svg'
                  width={30}
                  height={30}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://twitter.com/IIITDOdyssey'>
          <Image alt='twitter'
                  src='/Twitter.svg'
                  width={30}
                  height={30}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.linkedin.com/company/iiitdodyssey/mycompany/'>
          <Image alt='linkedin'
                  src='/LinkedIn.svg'
                  width={30}
                  height={30}/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar