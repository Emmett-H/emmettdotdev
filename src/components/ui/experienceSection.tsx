import React from 'react';
import CinchLogo from './logos/cinchLogo';
import ThalesLogo from './logos/thalesLogo';
import OnTheBeachLogo from './logos/onthebeachLogo';

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

const experiences: Experience[] = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "cinch",
        logo: CinchLogo,
        logoWidth: 50,
        logoHeight: 25,
        period: "2021 - 2023",
        link: "https://cinch.co.uk",
    },
    {
        id: 2,
        title: "UI Engineer",
        company: "Thales",
        logo: ThalesLogo,
        logoWidth: 50,
        logoHeight: 13,
        period: "2021",
        link: "https://thalesgroup.com",
    },
    {
        id: 3,
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
            <li className="mb-5 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-500"></div>
                <div className="flex flex-row items-center gap-2">
                    <div className="text-md font-medium">Engineering Lead</div>
                    <div className="inline-block rounded-full border px-1 py-0 text-xs uppercase">
                        current
                    </div>
                </div>
                <a
                    href="https://onthebeach.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex text-sm font-normal"
                >
                    On the Beach
                    <span className="ml-2">
                        <OnTheBeachLogo width={50} height={20} />
                    </span>
                </a>
            </li>
            {experiences.map(exp => (
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
                        <span className="ml-2 mt-0.5">
                            <exp.logo width={exp.logoWidth} height={exp.logoHeight} />
                        </span>
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default ExperienceSection;
