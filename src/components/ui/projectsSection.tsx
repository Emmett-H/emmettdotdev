import { motion } from 'framer-motion';
//import MoodylemonLogo from './logos/moodylemonLogo';
import GhibliDigitalLogo from './logos/ghibliLogo';
import JukeMusicLogo from './logos/jukeLogo';
import McFarlandLogo from './logos/mcfarlandLogo';
import EmmettLogo from './logos/emmettLogo';
import QuestionLogo from './logos/questionLogo';

const ProjectsData = [
    // {
    //     id: 1,
    //     name: 'moody lemon (',
    //     description:
    //         'A custom headless Shopify store for a swimwear business.',
    //     link: 'https://moodylemon.shop/',
    //     image: MoodylemonLogo,
    // },
    {
        id: 2,
        name: 'Juke The Band',
        description: 'Landing and contact page for a band.',
        link: 'https://www.juketheband.co.uk',
        image: JukeMusicLogo,
    },
    {
        id: 3,
        name: 'Ghibli Digital',
        description: 'Desert themed marketing agency landing page.',
        link: 'https://ghibli-digital.netlify.app/',
        image: GhibliDigitalLogo,
    },
    {
        id: 4,
        name: 'McFarland Transport',
        description: 'Photography showcase and landing page for trucking company.',
        link: 'https://www.mcfarlandtransport.co.uk/',
        image: McFarlandLogo,
    },
    {
        id: 5,
        name: 'emmettdotdev',
        description: 'Portfolio showcasing my own personal work.',
        link: 'https://www.emmett.dev/',
        image: EmmettLogo,
    },
];

const ProjectsSection = () => {
    return (
        <div>
            <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
                {ProjectsData.map((project) => {
                    return (
                        <motion.div
                            whileHover={{
                                y: -8,
                            }}
                            transition={{
                                type: 'spring',
                                bounce: 0.7,
                            }}
                            key={project.id}
                            className="mt-5 text-left"
                        >
                            <a target="_blank" rel="noopener noreferrer" href={project.link}>
                                <project.image className="mb-1 h-6 w-6" />
                                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {project.name}
                                </div>
                                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {project.description}
                                </div>
                            </a>
                        </motion.div>
                    );
                })}
                <motion.div
                    whileHover={{
                        y: -8,
                    }}
                    transition={{
                        type: 'spring',
                        bounce: 0.7,
                    }}
                    className="mt-5 text-left"
                >
                    <a href="#contact">
                        <QuestionLogo className="mb-1 h-6 w-6" />
                        <div className="mb-1 underline text-sm font-medium text-gray-900 dark:text-gray-100 underline-offset-4 decoration-red-500 decoration-2">
                            Yours next?
                        </div>
                        <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-400">
                            Your project could join this list, contact me below ↓ or at <a className='underline' href="mailto:emmett@emmett.dev">emmett@emmett.dev</a> to find out more.
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsSection;
