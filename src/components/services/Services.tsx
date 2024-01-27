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
        <section className="mb-12 md:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 md:mb-24 text-center mx-auto">
                    My Services
                </h2>

                {/* grid items */}
                <div>
                    {
                        servicesData.map((item, index: number) => {
                            return (
                                <Card key={index}>
                                    <CardHeader>
                                        <div className="w-[140px] h-[80px] bg-purple-700">{item.icon}</div>
                                    </CardHeader>
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