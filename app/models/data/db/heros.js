const problems = [
    "Web Marketing",
    "Brand Identity",
    "Web Design",
    "Software Development",
    "Graphic Design",
    "Communication",
    "Blueprinting",
    "Logo Design",
    "Technology",
    "Administration",
    "Illustration"
]


const sectors = [
    "Churches.",
    "Temples.",
    "Gods Glory",
    "Small Businesses",
    "Artists.",
    "Creatives.",
    "Entrepreneurs",
    "Startups.",
    "Non-profits.",
    "Communities.",
]


const heros = [
    {
        id: 'who-we-are',
        data: {
            bgImage: {
                src: '/assets/images/banner-primary.png'
            },
            lines: {
                firstLine: {
                    href: '/team',
                    before: 'We solve',
                    texts: [...problems],
                    speed: 77,
                    pauseTime: 3333,
                },
                secondLine: {
                    href: '/projects',
                    texts: [...sectors],
                    before: 'problems for',
                    speed: 90,
                    pauseTime: 13000,
                },
            
            }
        }
    },
    
    {
        id: 'our-projects',
        data: {
            bgImage: {
                src: ''
            }
        }
    }
]


export default heros