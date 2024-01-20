import React from 'react';
import Image from 'next/image';

import MainIMG from '../main_img/MainIMG';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

//icons
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

// data 1
const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Ryan Davis'
    },
    {
      icon: <PhoneCall size={20} />,
      text: '+1 223 33 44'
    },
    {
      icon: <MailIcon size={20} />,
      text: 'sample@mail.com'
    },
    {
      icon: <Calendar size={20} />,
      text: 'Available 24/7'
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Master of Computer Engineering'
    },
    {
      icon: <HomeIcon size={20} />,
      text: '344 Left Avn.'
    }
    
];

// data 2
const qualificationsData = [
  {
    title: 'education',
    data: [
      {
        university: 'AAA University',
        certification: 'Computer Engineering',
        year: '2013 - 2017'
      },
      {
        university: 'BBB University',
        certification: 'Master of Computer Engineering',
        year: '2017 - 2019'
      },
      {
        university: 'CCC College',
        certification: 'Computer Engineering Certification',
        year: '2019 - 2020'
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'AAA Company',
        qualification: 'Computer Engineer',
        year: '2018 - 2020'
      },
      {
        company: 'BBB Company',
        qualification: 'Software Tester',
        year: '2020 - 2021'
      },
      {
        company: 'CCC Company',
        qualification: 'Software Engineer',
        year: '2021 - 2022'
      },
    ],
  },
];

// data 3
const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS'
      },
      {
        name: 'JavaScript, PHP'
      },
      {
        name: 'Front-End Development'
      },
      {
        name: 'Back-End Development'
      }
    ],
  },
  {
    title: 'tools',
    data: [
      {
        image: '/about/vscode.svg'
      },
      {
        image: '/about/figma.svg'
      },
      {
        image: '/about/notion.svg'
      },
      {
        image: '/about/wordpress.svg'
      }
    ],
  },
];


interface QualificationsDataInterface {
  title?: string,
  data?: {
    university: string;
    certification: string;
    year: string;
    }[] | {
    company: string;
    qualification: string;
    year: string;
    }[];
  find?: any
}


const About = () => {

  const findData = (arr: QualificationsDataInterface, title: string): { title: string, data: Array<Object>} => {
    return arr.find((item: QualificationsDataInterface) => item.title === title);
  };



  return (
    <section className="md:h-[860px] pb-12 md:py-24">
      <div className="container">
        <h2 className="section-title mt-16 md:mt-24 mb-8 md:mb-16 text-center mx-auto">About Me</h2>
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start lg:justify-between">

            {/* image */}
            <div className="hidden md:flex relative">
              <MainIMG
                containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[400px] h-[400px] scale-[75%] lg:scale-[75%] bg-no-repeat relative' 
                imgSrc='/about/developer.png'
              />
            </div>

            {/* tabs */}
            <div className="flex">
              <Tabs defaultValue="personal">
                <TabsList className=" grid lg:grid-cols-3 xl:max-w-[320px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] " value="personal">Info</TabsTrigger>
                  <TabsTrigger className="w-[162px] " value="qualifications">Qualifications</TabsTrigger>
                  <TabsTrigger className="w-[162px] " value="skills">Skills</TabsTrigger>
                </TabsList>

                {/* tabs content */}
                <div className="text-lg mt-24 md:mt-24">
                
                  {/* personal tab content */}
                  <TabsContent value="personal">
                    <div className="text-center md:text-left">
                      <h3 className="h3 mb-4">Over 2 years of full stack web development</h3>
                      <p className="subtext max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores obcaecati eligendi. Eveniet maiores obcaecati eligendi.</p>

                      {/* icons */}
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {
                          infoData.map((item, index: number) => {
                            return (
                              <div 
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                              key={index}>
                                <div className="text-primary">{item.icon}</div>
                                <div>{item.text}</div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="qualifications">
                  <div className="text-center md:text-left">
                      <h3 className="h3 mb-4">Over 2 years of full stack web development</h3>
                      <p className="subtext max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores obcaecati eligendi. Eveniet maiores obcaecati eligendi.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="skills">
                  <div className="text-center md:text-left">
                      <h3 className="h3 mb-4">Over 2 years of full stack web development</h3>
                      <p className="subtext max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores obcaecati eligendi. Eveniet maiores obcaecati eligendi.</p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

          </div>
      </div>
    </section>
  )
}

export default About