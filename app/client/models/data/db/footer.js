import meta from "@configs/meta"


const footer = {
    copyright: meta.copyright,
    actionLinks: [
        {
            name: 'Support'
        },
        {
            name: meta.contact.phoneNumber
        },
        {
            name: 'help@desirable.solutions'
        }
    ],
    navLinks: {
        major: [
            {
                name: 'Our Vision',
                href: ''
            },
            {
                name: 'Our Projects',
            }

        ],
        minor: [
            {
                name: 'Contributions'
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