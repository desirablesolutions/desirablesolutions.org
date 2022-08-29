
import meta from "@configs/meta";
import projects from "@db/projects";
import getProjects from "@services/getProjects"


const homePage = {
    init: () => {
        return { ...homePage.data, ...homePage.query }
    },

    data: {
        metaData: {
            pageTitle: 'Home'
        },
        gallery: {
            heading: 'Our Team',
            data: [
                {
                    heading: 'Jeffrey Desir',
                    subHeading: 'DevOps Engineer',
                    description: 'Jeffrey is a DevOps Engineer with a passion for technology and a love for solving problems.',
                    profile: {
                        src: 'a',
                        alt: ''
                    },
                    handle: '@desirtech'
                },
                {
                    heading: 'Joshua Desir',
                    subHeading: 'Founder / Designer',
                    description: 'Jeffrey is a DevOps Engineer with a passion for technology and a love for solving problems.',
                    profile: {
                        src: 'a',
                        alt: ''
                    },
                    handle: '@desirtech'
                }
            ]
        }
    },

    query: {

        hero: {
            bgImage: {
                src: '/assets/images/banner-primary.png'
            },
            cta: {
                name: 'Need help?',
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
        helpForm: {
            title: 'Help',
            heading: 'What\'s your problem?',
            services: meta.info.problems,
        },


        threeColumnSection: {
            id: 'principles',
            title: 'Principles',
            heading: {
                name: 'Solid Principles for a Solid Foundation.',
            },
            columns: {
                first: {
                    heading: 'Design',
                    description: 'Measure twice, cut once.',
                },
                second: {
                    heading: 'Development',
                    description: 'Don\'t repeat yourself.',
                },
                third: {
                    heading: 'Dependability',
                    description: 'Hold it down.',
                }
            }
        },

        showcase: {
            cta: {
                name: 'See more',
                href: '/projects'
            },
            title: 'Projects.',
            heading: 'Designed by masters, inspired by life.',
            latest: [...projects],
            featured: { ...projects[0] }
        }
    }
}


export default homePage