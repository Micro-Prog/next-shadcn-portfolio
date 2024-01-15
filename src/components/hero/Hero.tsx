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
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="py-4 md:py-10 h-[64vh] md:pt-12 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">

      <div className="container mx-auto">

        <div className="flex justify-between gap-x-8 text-black dark:text-white">

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left z-30">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[8px]">Web Developer</div>
            <h1 className="h1">Hello, My Name is Daniel.</h1>
            <p className="capitalize subtext max-w-[600px] md:mx-0">Brief Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita velit voluptatum doloremque.</p>

            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto md:mx-0 mb-8">

              {/* btn 1 */}
              <Link href='/contact'>
                <Button variant='customPrimary' className="gap-x-2 p-6">Let's Keep in Touch <Send size={18}/>
                </Button>
              </Link>

              {/* btn 2 */}
              <Link href='/contact'>
                <Button variant='customSecondary' className="gap-x-2 p-6">CV <Download size={18}/>
                </Button>
              </Link>
            </div>
            
            {/* social media */}
            <SocialMedia 
              containerStyles='flex gap-x-4 mx-auto md:mx-0' 
              iconsStyles='text-foreground text-[20px] hover:text-primary transition-all hover:-translate-y-1 hover:-translate-x-1 duration-1000'
            />

          </div>

          {/* image */}
          <div className="hidden lg:flex relative">

            {/* badge one */}
            <Badge />

            <div className="bg-hero_shape_2_light dark:bg-hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-0 -right-0"></div>

            {/* developer image */}
            <HeroIMG 
              imgSrc='/hero/developer.png' 
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'  
            />

          </div>

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