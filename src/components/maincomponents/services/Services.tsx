import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
    Card,  
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


// services data
const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        desc: 'Qui anim adipisicing sit magna aliqua sunt.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        desc: 'Qui anim adipisicing sit magna aliqua sunt.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        desc: 'Qui anim adipisicing sit magna aliqua sunt.'
    },
];


const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 md:mb-24 text-center mx-auto">
                    My Services
                </h2>

                {/* grid items */}
                <div 
                    className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"
                >
                    {
                        servicesData.map((item, index: number) => {
                            return (
                                <Card 
                                    className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                                    key={index}
                                >
                                    <CardHeader className="text-primary absolute -top-[10px]">
                                        <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center mt-16">
                                        <CardTitle className="mb-4">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                            {item.desc}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;