"use client";
import React from 'react';
import Link from 'next/link';

// import icons
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri'


// icons data
const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />
  },

  {
    path: '/',
    name: <RiLinkedinFill />
  },

  {
    path: '/',
    name: <RiGithubFill />
  }, 

  {
    path: '/',
    name: <RiInstagramFill />
  },

  {
    path: '/',
    name: <RiFacebookFill />
  }
];


interface SocialMediaInterface {
  containerStyles?: string | undefined,
  iconsStyles?: string | undefined,
}

const SocialMedia = ({ containerStyles, iconsStyles }: SocialMediaInterface) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div className={`${iconsStyles}`}> 
                {item.name}
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SocialMedia;