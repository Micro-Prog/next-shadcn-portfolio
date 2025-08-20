"use client";
import React, { useState, useEffect } from "react";

// theme toggler icon
import ThemeToggler from "@/components/minorcomponents/theme_toggler/ThemeToggler";

// logo
import Logo from "../../minorcomponents/logo/Logo";

// navbar
import Navbar from "../navbar/Navbar";

// mobile navbar
import MobileNavbar from "../mobile_navbar/MobileNavbar";
import { usePathname } from "next/navigation";


const Header = () => {

    const [ header, setHeader ] = useState(false);
    const pathname = usePathname();

    useEffect(() => {

        // window event listener function
        const onScroll = (e: Event) => {
            window.scrollY > 100 ? setHeader(true) : setHeader(false);
        }

        // set scroll position event listener
        // const scrollPosition = window.addEventListener('scroll', (e: Event) => {
        //         window.scrollY > 50 ? setHeader(true) : setHeader(false);
        //     });
            

        // add header scroll event listener
        window.addEventListener('scroll', onScroll);

        // remove event listener
        return () => window.removeEventListener('scroll', onScroll);

    });

    return (
        <header 
            className={`${ header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent' } sticky z-30 top-0 transition-all ${ pathname === '/' && 'bg-[#f3f1f0]'}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* navbar */}
                        <Navbar 
                            NavStyle="hidden md:flex gap-x-8" 
                            linkStyle="relative hover:text-primary transition-all"
                            underlineStyle="absolute left-0 top-full h-[3px] bg-primary w-full"
                        />

                        {/* theme toggler */}
                        <ThemeToggler />

                        {/* mobile navbar */}
                        <div className="md:hidden">
                            <MobileNavbar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;