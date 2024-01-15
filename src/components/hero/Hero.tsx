import React from 'react'
import { Button } from '../ui/button';
import { Download, Send } from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

// hero developer IMG
import HeroIMG from '../hero_img/HeroIMG';

// badge
import Badge from '../badge/Badge';

// socials
import SocialMedia from '../social_media/SocialMedia';


const Hero = () => {
  return (
    <section className="py-12 md:py-24 h-[84vh] md:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 text-black dark:text-white">

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[8px]">Web Developer</div>
            <h1 className="h1">Hello, My Name is Daniel.</h1>
            <p className="capitalize subtext">Brief Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita velit voluptatum doloremque, consequatur maiores harum quaerat deserunt sapiente inventore! Excepturi ab dolorum repudiandae eaque ipsa voluptas error provident unde.</p>

            {/* buttons */}
            <div></div>
          </div>

          {/* image */}
          <div className="hidden md:flex relative">image</div>

          {/* icon */}
          <div className="hidden md:flex absolute left-1/2 bottom-44 md:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;