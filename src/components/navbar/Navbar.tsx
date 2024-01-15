"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

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
  
  const path = usePathname();
  
  return (
    <nav
      className={`${NavStyle}`}
    >
      {
        Links.map((item, index) => {
          return (
            <div key={index}>
              <Link 
                href={item.link} 
                key={index} 
                className={`capitalize ${linkStyle}`}
                >
                {
                  item.link === path && (
                    <motion.span 
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'tween' }}
                    layoutId='underline'
                    className={`${underlineStyle}`}
                  />
                    // <motion.span 
                    //   initial={{ y: '-100%' }}
                    //   animate={{ y: 0 }}
                    //   transition={{ type: 'tween' }}
                    //   layoutId='underline'
                    //   className={`${underlineStyle}`}
                    // />
                  ) 
                }
                  
                  {item.info}
              </Link>
            </div>
          )
        })
      }
    </nav>
  )
}

export default Navbar