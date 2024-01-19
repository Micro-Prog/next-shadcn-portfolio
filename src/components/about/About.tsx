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
      <div className="container mx-auto">
        <h2 className="section-title mt-16 md:mt-24 mb-8 md:mb-16 text-center mx-auto">About Me</h2>
      </div>
      <div>

        {/* image */}
        <MainIMG
          containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[510px] h-[510px] scale-[75%] bg-no-repeat relative' 
          imgSrc='/about/developer.png'
          />
      </div>
    </section>
  )
}

export default About