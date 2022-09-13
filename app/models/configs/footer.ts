import images from "@db/images"
import type { Footer } from "@typings/Footer"

const logo = images({
    property: "id",
    value: 'logo-transparent'
})

const footer: Footer = {
    heading: 'We solve problems.',
    copyright: {
        title: '© 2022 Désirable  Solutions. All rights reserved.',
        description: 'To love is to serve.'
    },
    socials: [
        {
            name: 'facebook',
            url: 'https://www.facebook.com/desirable.solutions'
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/desirable_s'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/desirable_solutions/'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/company/desirable-solutions/'
        },

    ],
    favicon: { ...logo, url: '/' },
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