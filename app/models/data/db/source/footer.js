import meta from "@configs/meta";
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

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
                icon: <CoffeeIcon />,
                href: 'https://ko-fi.com'
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
        major: [...meta.pages.slice(0, 3)],
        minor: [...meta.pages.slice(3)]

    },
    contact: {
        phoneNumber: '+1 (786) 766-9054',
        email: 'help@desirable.solutions',
        socials: {
            ko_fi: '',
            linkedin: '',
            facebook: '',
            twitter: '',
            instagram: '',
            youtube: ''

        }
    }
}

export default footer