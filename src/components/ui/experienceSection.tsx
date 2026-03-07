import React from 'react';
import CinchLogo from './logos/cinchLogo';
import ThalesLogo from './logos/thalesLogo';
import OnTheBeachLogo from './logos/onthebeachLogo';
import CleoLogo from './logos/cleoLogo';
import { motion } from 'framer-motion';

interface Experience {
    id: number;
    title: string;
    company: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: any;
    logoWidth: number;
    logoHeight: number;
    period: string;
    link: string;
}

// Uncomment and update when starting a new role:
// {
//     id: 0,
//     title: "Job Title",
//     company: "Company",
//     logo: ...,
//     logoWidth: 50,
//     logoHeight: 20,
//     period: "2025 - present",
//     link: "https://...",
// },

const experiences: Experience[] = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Cleo",
        logo: CleoLogo,
        logoWidth: 50,
        logoHeight: 20,
        period: "Feb 2025 - Oct 2025",
        link: "https://web.meetcleo.com/",
    },
    {
        id: 3,
        title: "Engineering Lead",
        company: "On the Beach",
        logo: OnTheBeachLogo,
        logoWidth: 50,
        logoHeight: 20,
        period: "2023 - 2025",
        link: "https://onthebeach.co.uk",
    },
    {
        id: 4,
        title: "Senior Software Engineer",
        company: "cinch",
        logo: CinchLogo,
        logoWidth: 50,
        logoHeight: 25,
        period: "2021 - 2023",
        link: "https://cinch.co.uk",
    },
    {
        id: 5,
        title: "UI Engineer",
        company: "Thales",
        logo: ThalesLogo,
        logoWidth: 50,
        logoHeight: 13,
        period: "2021",
        link: "https://thalesgroup.com",
    },
    {
        id: 6,
        title: "Software Engineer",
        company: "Thales",
        logo: ThalesLogo,
        logoWidth: 50,
        logoHeight: 13,
        period: "2017 - 2021",
        link: "https://thalesgroup.com",
    },
];

const ExperienceSection: React.FC = () => {
    return (
        <ol className="relative border-s border-gray-200 font-dm-sans">
            {
                experiences.map(exp => (
                    <li className="mb-5 ms-4" key={exp.id}>
                        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="text-md font-medium">
                            {exp.title}
                            <span className="ml-1 mt-1 text-xs">({exp.period})</span>
                        </div>
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex text-sm font-normal"
                        >
                            {exp.company}
                            <motion.div
                                className="ml-2 mt-0.5"
                                whileHover={{
                                    y: -6,
                                }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.4,
                                }}>
                                <exp.logo width={exp.logoWidth} height={exp.logoHeight} />
                            </motion.div>
                        </a>
                    </li>
                ))
            }
        </ol >
    );
};

export default ExperienceSection;
