import React from 'react';
import Image from 'next/image';

import MainIMG from '@/components/minorcomponents/main_img/MainIMG';
import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

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
        role: 'Computer Engineer',
        year: '2018 - 2020'
      },
      {
        company: 'BBB Company',
        role: 'Software Tester',
        year: '2020 - 2021'
      },
      {
        company: 'CCC Company',
        role: 'Software Engineer',
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
        image: '/about/wordpress.svg'
      }
    ],
  },
];

interface QualificationsDataInterface {
  title?: string;
  data?: {
    university?: string;
    certification?: string;
    company?: string;
    role?: string;
    year: string;
  }[];
  find?: any;
}

interface SkillsDataInterface {
  title?: string;
  data?: {
    name?: string;
    image?: string;
  }[];
}

const About = () => {

  const findData = <T extends { title?: string }>(arr: T[], title: string): T | undefined => {
    return arr.find((item: T) => item.title === title);
  };

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-36">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          About Me
        </h2>
        
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8 lg:gap-12">
          
          {/* Image - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:flex justify-center xl:justify-start flex-shrink-0 w-full xl:w-auto mb-6 xl:mb-0">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] flex items-center justify-center overflow-hidden">
              <MainIMG
                containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-full h-full bg-no-repeat bg-center bg-contain relative' 
                imgSrc='/about/developer.png'
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex-1 max-w-none xl:max-w-2xl">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto xl:mx-0 xl:max-w-[480px] border dark:border-none">
                <TabsTrigger className="text-xs sm:text-sm px-2 sm:px-4" value="personal">
                  Info
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm px-2 sm:px-4" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="text-xs sm:text-sm px-2 sm:px-4" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* Tabs content */}
              <div className="mt-8 sm:mt-12">
                
                {/* Personal tab content */}
                <TabsContent value="personal" className="space-y-6">
                  <div className="text-center xl:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                      Over 2 years of full stack web development
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto xl:mx-0 mb-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet maiores obcaecati eligendi. Eveniet maiores obcaecati eligendi.
                    </p>

                    <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
                      {/* Icons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                        {infoData.map((item, index: number) => (
                          <div 
                            className="flex items-center gap-x-3 justify-center xl:justify-start"
                            key={index}
                          >
                            <div className="text-primary flex-shrink-0">{item.icon}</div>
                            <div className="text-sm sm:text-base truncate">{item.text}</div>
                          </div>
                        ))}
                      </div>

                      {/* Language skills */}
                      <div className="flex flex-col gap-y-2 flex-shrink-0">
                        <div className="text-primary font-semibold text-center xl:text-left">
                          Language Skills
                        </div>
                        <div className="border-b border-border"></div>
                        <div className="text-sm sm:text-base text-center xl:text-left">
                          English, French, Spanish, Italian
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications tab content */}
                <TabsContent value="qualifications" className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
                      My Qualifications
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Experience */}
                      <div className="space-y-6">
                        <div className="flex gap-x-2 items-center text-lg sm:text-xl text-primary justify-center lg:justify-start">
                          <Briefcase size={22} />
                          <h4 className="capitalize font-medium">
                            {findData(qualificationsData, 'experience')?.title}
                          </h4>
                        </div>

                        {/* Experience list */}
                        <div className="space-y-4">
                          {findData(qualificationsData, 'experience')?.data?.map((item: any, index: number) => (
                            <div 
                              key={index}
                              className="flex gap-x-4 group p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <div className="h-[60px] sm:h-[84px] w-[2px] bg-border relative flex-shrink-0">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0 group-hover:translate-y-[30px] sm:group-hover:translate-y-[42px] transition-all duration-700"></div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm sm:text-base leading-tight mb-2 truncate">
                                  {item.company}
                                </div>
                                <div className="text-xs sm:text-sm leading-tight text-muted-foreground mb-3">
                                  {item.role}
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-primary">
                                  {item.year}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="space-y-6">
                        <div className="flex gap-x-2 items-center text-lg sm:text-xl text-primary justify-center lg:justify-start">
                          <GraduationCap size={22} />
                          <h4 className="capitalize font-medium">
                            {findData(qualificationsData, 'education')?.title}
                          </h4>
                        </div>

                        {/* Education list */}
                        <div className="space-y-4">
                          {findData(qualificationsData, 'education')?.data?.map((item: any, index: number) => (
                            <div 
                              key={index}
                              className="flex gap-x-4 group p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <div className="h-[60px] sm:h-[84px] w-[2px] bg-border relative flex-shrink-0">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0 group-hover:translate-y-[30px] sm:group-hover:translate-y-[42px] transition-all duration-700"></div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm sm:text-base leading-tight mb-2 truncate">
                                  {item.university}
                                </div>
                                <div className="text-xs sm:text-sm leading-tight text-muted-foreground mb-3">
                                  {item.certification}
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-primary">
                                  {item.year}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills tab content */}
                <TabsContent value="skills" className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                      Over 2 years of full stack web development
                    </h3>
                    <div className="border-b border-border mb-6"></div>

                    {/* Skills list */}
                    <div className="mb-8 space-y-4">
                      <h4 className="font-bold text-lg">Skills</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {findData(skillsData, 'skills')?.data?.map((item: any, index: number) => (
                          <div
                            className="p-3 bg-muted/50 rounded-lg text-center lg:text-left"
                            key={index}
                          >
                            <div className="text-sm sm:text-base font-medium">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg">Tools</h4>
                      <div className="border-b border-border mb-4"></div>

                      {/* Tools list */}
                      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        {findData(skillsData, 'tools')?.data?.map((item: any, index: number) => (
                          <div 
                            key={index}
                            className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                          >
                            <Image 
                              src={item.image}
                              width={32}
                              height={32}
                              alt='Tool icon'
                              priority
                              className="w-8 h-8 sm:w-10 sm:h-10"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
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