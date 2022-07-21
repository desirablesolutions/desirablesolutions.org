import meta from "@configs/meta"
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

const footer = {
    impressum: meta.impressum,
    copyright: {
        text: meta.copyright,
        logo: {
            src: "/assets/images/logo-transparent.png",
            alt: 'desirable-solutions-logo'
        }
    },
    actionLinks: {
        title: {
            text: 'We are here to serve.',
            icon: <VolunteerActivismIcon />
        },
        links: [
            {
                name: 'Support Us',
                icon: <CoffeeIcon />
            },
            {
                name: meta.contact.phoneNumber,
                icon: <PhoneIcon />
            },
            {
                name: meta.contact.email,
                icon: <EmailIcon sx={{ color: 'white' }} />
            }
        ],
    }
    , navLinks: {
        major: [
            {
                name: 'Vision',
                icon: <VisibilityIcon />,
                href: '/vision'
            },
            {
                name: 'Projects',
                icon: <RedeemIcon />,
                href: '/projects'
            },
            {
                name: 'Team',
                href: '/team',
                icon: <PeopleIcon />
            }

        ],
        minor: [
            {
                name: 'Story',
                icon: <HandshakeIcon />
            },
            {
                name: 'Services',
                icon: <DesignServicesIcon />
            },
            {
                name: 'Info',
                icon: <InfoOutlinedIcon />
            }

        ]
    },
    contact: {
        phoneNumber: '+1 (786) 766-9054',
        email: 'help@desirable.solutions',
        socials: {
            kofi: ''
        }
    }
}

export default footer