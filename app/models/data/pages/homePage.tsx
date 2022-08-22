import HandshakeIcon from '@mui/icons-material/Handshake';
import TerrainIcon from '@mui/icons-material/Terrain';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


import meta from "@configs/meta";


const servicesData = [
    {
        name: 'Web Development',
    },
    {
        name: 'Mobile Development',
    },
    {
        name: 'UI/UX Design',
    },
    {
        name: 'Digital Marketing',
    },
    {
        name: 'Operations Consultation',
    },
    {
        name: 'Logo Design',
    },
    {
        name: 'Graphic Design',
    },
    {
        name: 'Content Writing',
    },
    {
        name: 'Art & Illustration'
    },
    {
        name: "Brand Identity",
    }
]

const homePage = {
    hero: {

        bgImage: {
            src: '/assets/images/banner-primary.png'
        },
        cta: {
            name: 'Need help?',
            icon: (<HandshakeIcon />),
            href: '/help'
        },
        lines: {
            firstLine: {
                href: '/team',
                before: 'We solve',
                texts: [...meta.info.problems],
                speed: 77,
                pauseTime: 3333,
            },
            secondLine: {
                href: '/projects',
                texts: [...meta.info.sectors],
                before: 'problems for',
                speed: 90,
                pauseTime: 14000,
            },

        }

    },
    textCarousel: {
        heading: '',
        title: 'Questions',
    },

    gallery: {

        id: 'team-gallery',
        title: 'Team',
        heading: '"The Dream Team"'


    },

    dataSection: {
        id: 'vision',
        title: 'Vision.',
        heading: {
            name: 'Sincere work, serious goals.',
            icon: <HourglassTopIcon />,
        },
        data: [
            {
                id: 'value',
                title: {
                    name: 'Value',
                    icon: ''
                },
                value: {
                    before: '~',
                    number: 790000000
                },
                image: {
                    src: '/assets/images/media/banners/value.svg',
                    alt: ''
                },
                description: `7.9 billion invaluable human beings shall witness the birth of a loving meritocracy - the land of milk and honey. May our example of sincere & transformative service pave the way.`
            }, {
                id: 'values',
                title: {
                    name: 'Communities',
                    icon: ''
                },
                value: {
                    before: '~',
                    number: 980000000
                },
                image: {
                    src: '/assets/images/media/banners/community.svg',
                    alt: ''
                },
                description: ''
            },
            {
                id: 'tools',
                title: {
                    name: 'Tools',
                    icon: ''
                },
                value: {
                    before: '$',
                    number: 500000000
                },
                image: {
                    src: '/assets/images/media/banners/tools.svg',
                    alt: ''
                },
                description: ''
            },
            {
                id: 'values',
                title: {
                    name: 'Services',
                    icon: ''
                },
                value: {
                    before: '$',
                    number: 500000000
                },
                image: {
                    src: '/assets/images/media/banners/services.svg',
                    alt: ''
                },
                description: ''
            }
        ],
        cta: {
            name: 'Read More',
            href: '/vision'
        }
    },
    formSection: {
        title: 'Help',
        heading: 'What\'s your problem?',
        services: servicesData,

    },


    summarySection: {
        id: 'principles',
        title: 'Principles',
        heading: {
            name: 'Solid Principles make a Solid Foundation.',
            icon: <TerrainIcon />
        }
    },

    showcase: {
        id: 'projects-showcase',
        cta: {
            name: 'See more',
            href: '/projects'
        },
        title: 'Projects.',
        heading: 'Designed by masters, inspired by life.',
        latest: [{
            provisoners: [
                {
                    name: 'Joshua Desir',
                    profile: {
                        src: ''
                    }
                }
            ],
            covers: [{
                src: ''
            }]
        }],
        featured: {
            url: '/assets/images/featured-project.png',
            name: 'Featured Project',
            description: '',
            covers: [''],
            tags: [{ name: '', href: '' }],
            provisoners: [{ name: '', profile: { src: '' }, }],
        }
    }
}

export default homePage