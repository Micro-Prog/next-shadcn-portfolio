import React, { useState, useEffect } from "react";

// theme toggler icon
import ThemeToggler from "../theme_toggler/ThemeToggler";

// logo
import Logo from "../logo/Logo";

// navbar
import Navbar from "../navbar/Navbar";

// mobile navbar
import MobileNavbar from "../mobile_navbar/MobileNavbar";


const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* navbar */}
                        <Navbar 
                            NavStyle="hidden md:flex gap-x-8" 
                            linkStyle="relative hover:text-primary transition-all"
                            underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full"
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