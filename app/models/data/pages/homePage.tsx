import HandshakeIcon from '@mui/icons-material/Handshake';
import TerrainIcon from '@mui/icons-material/Terrain';

import meta from "@configs/meta";

const homePage = {
    hero: {

        bgImage: {
            src: '/assets/images/banner-primary.png'
        },
        cta: {
            name: 'Need help?',
            icon: <HandshakeIcon />,
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

    formsSection: {

    },


    summarySection:    {
        id: 'principles',
        title: 'Principles',
        heading: {
            name: 'Solid Principles make a Solid Foundation.',
            icon: <TerrainIcon/>
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
                    name: 'John Doe',
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
            tags: [{name: '', href: ''}],
            provisoners: [{name: '', profile: {src: ''}, }],
        }
    }
}

export default homePage