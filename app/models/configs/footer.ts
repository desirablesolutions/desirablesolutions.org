import images from "@db/images"

export type Link = {
    name: string
    url?: string
}
export type FooterProps = {
    copyright: {
        title: string,
        description: string
    },
    logo: {
        src: string,
        url: string,
        alt: string
    },
    heading: string,
    navLinks: [
        {
            heading: string,
            links: Link[]
        }
    ],
    email: string,
    phoneNumber: string,
    terminalLinks: Link[],
    cta: {
        name: string,
        url: string
    }
}

const logo = images({
    property: "id",
    value: 'logo-transparent'
})

const footer: FooterProps = {
    heading: 'We out here',
    copyright: {
        title: '© 2022 Desirable Solutions. All rights reserved.',
        description: 'lorem ipsum dolor sit amet'
    },
    logo: { ...logo, url: '/' },
    navLinks: [
        {
            heading: 'Company',
            links: [
                {
                    name: 'About',
                    url: '/about'
                }
            ]
        }
    ],
    email: 'help@desirable.solutions',
    phoneNumber: '+1 (786) 555-5555',
    terminalLinks: [
        {
            name: 'Terms of Use',
            url: '/terms-of-use'
        },
        {
            name: 'Privacy Policy',
            url: '/privacy-policy'
        },
        {
            name: 'Cookie Policy',
            url: '/cookie-policy'
        },
        {
            name: 'Accessibility',
        },
        {
            name: 'Sitemap',
        },
        {
            name: 'Contact',
        },

    ],
    cta: {
        name: '🤝🏿Get Help',
        url: '/help'
    }
}

export default footer