import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RedeemIcon from '@mui/icons-material/Redeem';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"


const meta = {
    title: 'Désirable Solutions',
    description: 'We solve problems.',
    url: 'https://desirable.solutions/',
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
            name: 'Home',
            href: '/'
        },
        {
            name: 'Vision',
            href: '/vision',
            icon: <VisibilityIcon/>
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

    },
    icons: ['57x57', '72x72', '114x114', '144x144', '152x152', '180x180'],
}

export default meta