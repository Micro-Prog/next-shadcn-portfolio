'use client';
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import 'swiper/swiper-bundle.css';
import 'swiper/css'

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from "./projectcard/ProjectCard";
import { link } from "fs";


const projectData = [
    {
        image: '/work/imgs/1.jpg',
        title: 'Project One',
        description: 'This is a brief description of project one.',
        link: '#',
        github: '#',
    },
    {
        image: '/work/imgs/2.jpg',
        title: 'Project Two',
        description: 'This is a brief description of project two.',
        link: '#',
        github: '#',
    },
    {
        image: '/work/imgs/3.jpg',
        title: 'Project Three',
        description: 'This is a brief description of project three.',
        link: '#',
        github: '#',
    },
    {
        image: '/work/imgs/4.jpg',
        title: 'Project Four',
        description: 'This is a brief description of project four.',
        link: '#',
        github: '#',
    },

]



const Work = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 md:mb-24 text-center mx-auto">
                My Work
                </h2>

                {/* Wrap row */}
                <div className="w-full flex flex-col xl:flex-row xl:items-start xl:gap-8 mb-12">
                {/* Pink box */}
                <div className="w-full xl:w-[400px] xl:shrink-0 text-center xl:text-left xl:h-[400px] p-8 mb-8 xl:mb-0">
                    <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start h-full">
                        <h2 className="section-title mb-4">Latest Projects</h2>
                        <p className="subtitle mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ratione rem sequi esse porro sit? Alias quibusdam architecto, obcaecati dicta eligendi nostrum, blanditiis aliquid deserunt nam officia ad quam commodi.
                        </p>
                        <Link href={'/projects'}>
                        <Button>All Projects</Button>
                        </Link>
                    </div>
                </div>

                {/* Slider */}
                <div className="w-full xl:flex-1"> 
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1} 
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]} 
                        pagination={{ clickable: true }}
                    >
                        {
                            projectData.map((projectDataSingle, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <ProjectCard project={projectDataSingle} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>

                </div>
            </div>
        </section>

    );
}

export default Work;