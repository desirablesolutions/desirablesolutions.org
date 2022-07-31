import meta from "@configs/meta"

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
                    texts: [...meta.info.problems],
                    speed: 77,
                    pauseTime: 3333,
                },
                secondLine: {
                    href: '/projects',
                    texts: [...meta.info.sectors],
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