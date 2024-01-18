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

// data
const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Ryan Davis'
    },
    
];

const About = () => {
  return (
    <div>About</div>
  )
}

export default About