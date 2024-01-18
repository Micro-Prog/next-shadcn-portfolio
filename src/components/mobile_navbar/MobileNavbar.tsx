import React from 'react'
import { AlignJustify } from 'lucide-react';


// import shadcn sheet
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

// navbar
import Navbar from '../navbar/Navbar';
// logo
import Logo from '../logo/Logo';
// social media
import SocialMedia from '../social_media/SocialMedia';


const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-6">
          <div className="flex flex-col items-center gap-y-24">
            <Logo />
            <Navbar 
              NavStyle='flex flex-col items-center gap-y-6'
              linkStyle='text-xl'
            />
            <SocialMedia 
              containerStyles='flex gap-x-4 mt-4'
              iconsStyles='text-2xl'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar