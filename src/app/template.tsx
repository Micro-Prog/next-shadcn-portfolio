"use client";
import useScrollProgress from '@/utils/custom_hooks/scroll_progress/useScrollProgress';
import { motion } from 'framer-motion';
import React from 'react';


const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1 },
};


const Template = ({ children }: { children: React.ReactNode}) => {

    const completion = useScrollProgress();

    return (
        <>
            <motion.main 
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear", delay: 0.5, duration: 1 }}
            >
                {children}
            </motion.main>

            {/* bar */}
            <span style={{ transform: `translateY(${completion - 100}%)` }} className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"></span>
            <div className="h-[4000px]"></div>
        </>
    )
}

export default Template;