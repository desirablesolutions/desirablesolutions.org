import images from "@db/images"

export type Link = {
    name: string
    url?: string
}

export type NavLinks = {
    links: Link[]
    heading: string
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
    navLinks: NavLinks[],
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
    heading: 'We solve problems. No bullshit.',
    copyright: {
        title: '© 2022 Desirable Solutions. All rights reserved.',
        description: 'To love is to serve.'
    },
    logo: { ...logo, url: '/' },
    navLinks: [
        {
            heading: 'Agency',
            links: [
                {
                    name: 'About',
                    url: '/about'
                }
            ]
        },
        {
            heading: 'Services',
            links: [
                {
                    name: 'Web Design',
                    url: '/services/web-design'
                }
            ]
        },
        {
            heading: 'Projects',
            links: [
                {
                    name: 'All Projects',
                    url: '/projects'
                }
            ]
        },
        {
            heading: 'Help',
            links: [
                {
                    name: 'Contact',
                    url: '/contact'
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