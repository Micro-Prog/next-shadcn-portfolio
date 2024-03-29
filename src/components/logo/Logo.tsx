import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


const Logo = () => {
  return (
    <Link href='/'>
      <Image 
        src='/logo.svg'
        width={54}
        height={54}
        priority
        alt='logo'
      />
    </Link>
  )
}

export default Logo;