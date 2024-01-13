import Link from 'next/link'
import React from 'react'

// framer motion
import { motion } from 'framer-motion';


interface NavbarInterface {
  NavStyle?: string | undefined,
  linkStyle?: string | undefined,
  underlineStyle?: string | undefined,
}

const Links: { link: string, info: string }[] = [
  { link: '/', info: 'home' },
  { link: '/projects', info: 'my projects' },
  { link: '/contact', info: 'contact' }
]


function Navbar({ NavStyle, linkStyle, underlineStyle }: NavbarInterface) {
  return (
    <nav
      className={`${NavStyle}`}
    >
      {
        Links.map((item, index) => {
          return (
            <>
              <Link 
                href={item.link} 
                key={index} 
                className={`capitalize ${linkStyle} ${underlineStyle}`}
                >
                  
                  {item.info}
              </Link>
            </>
          )
        })
      }
    </nav>
  )
}

export default Navbar