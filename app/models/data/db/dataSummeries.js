import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import images from "@db/images"


const dataSummeries = [
    {
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
                    before: '$',
                    number: 500000000
                },
                image: {
                    src: '/assets/images/media/banners/value.svg',
                    alt: ''
                },
                description: ''
            },     {
                id: 'values',
                title: {
                    name: 'Communities',
                    icon: ''
                },
                value: {
                    before: '$',
                    number: 500000000
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
    }
]

export default dataSummeries