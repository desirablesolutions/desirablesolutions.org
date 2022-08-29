import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleIcon from '@mui/icons-material/People';
import RedeemIcon from '@mui/icons-material/Redeem';
import VisibilityIcon from '@mui/icons-material/Visibility';

const meta = {
    title: 'Désirable Solutions',
    description: 'We solve problems.',
    url: 'https://desirable.solutions/',
    socials: {
ko_fi: {
    url: 'https://ko-fi.com/desirablesolutions',
}
    },
    copyright: `© 2022 Désirable Solutions. All rights reserved.`,
    impressum: `In God We Trust.`,
    info: {
        problems: [
            "Web Marketing",
            "Brand Identity",
            "Web Design",
            "Software Development",
            "Graphic Design",
            "Communication",
            "Idea Blueprinting",
            "Logo Design",
            "Technology",
            "Administration",
            "Illustration"
        ],

        sectors: [
            "Artists.",
            "Creatives.",
            "Entrepreneurs",
            "Small Businesses",
            "Startups.",
            "Non-profits.",
            "Communities.",
            "Churches.",
            "Temples.",
            "Gods Glory",
        ]
    },
    pages: [
        {
            name: 'Projects',
            href: '/projects',
            icon: <RedeemIcon/>
        },
        {
            name: 'Team',
            href: '/team',
            icon: <PeopleIcon/>
        },
        {
            name: 'Vision',
            href: '/vision',
            icon: <VisibilityIcon/>
        },
        {
            name: 'Help',
            href: '/help',
            icon: <HandshakeIcon/>
        },
        {
           name: 'Services',
           href: '/services',
              icon: <DesignServicesIcon/>
        },
        {
            name: 'About',
            href: '/about',
            icon: <InfoOutlinedIcon/>
        }
    ],
    contact: {
        phoneNumber: '+1 (786) 766-9054',
        email: 'help@desirable.solutions'
    },
    favicon: {
        src: '',
        alt: '',
        href: '',
    },
    pageTitle: 'Home',
    basePaths: {
        icons: '/assets/icons/',
        images: '/assets/images/',
        media: '/assets/images/media',
        projects: '/assets/images/media/projects/',
        people: '/assets/images/media/people/',
        banners: '/assets/images/media/banners/',

    },
    icons: ['57x57', '72x72', '114x114', '144x144', '152x152', '180x180'],
}

export default meta