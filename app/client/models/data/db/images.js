
import meta from "@configs/meta"


const images = {
    logo: {
        transparent: {
            src: "/assets/images/logo-transparent.png",
            alt: 'logo-transparent'
        }
    },

    projects: [
        {
            id: 'yonder-airways',
            covers: [
                {
                    id: 'yonder-airways-logo',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-logo.png`,

                },
                {
                    id: 'yonder-airways-circle-favicon',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-circle-favicon.png`,
                },
                {
                    id: 'yonder-airways-square-favicon',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-square-favicon.png`,
                },
                {
                    id: 'yonder-airways-business-card-mockup',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-business-card-mockup.png`,
                },
                {
                    id: 'yonder-airways-flight-ticket-mockup',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-flight-ticket-mockup.png`,
                },
                {
                    id: 'yonder-airways-travel-site-mockup',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-travel-site-mockup.png`,
                },
                {
                    id: 'yonder-airways-logo-schema',
                    src: `${meta.basePaths.projects}yonder-airways/yonder-airways-logo-schema.png`,
                }
            ]
        },
        {
            id: 'elixir-and-cream-cafe',
            covers: [
                {
                    id: 'elixir-and-cream-cafe-logo',
                    src: `${meta.basePaths.projects}elixir-and-cream-cafe/elixir-and-cream-cafe-logo.png`,
                },

            ]
        }

    ],

    people: [
        {
            id: 'joshua-desir',
            src: `${meta.basePaths.people}joshua-desir/joshua-desir-profile.jpg`,
        },
        {
            id: 'jeffrey-desir',
            src: `${meta.basePaths.people}jeffrey-desir/jeffrey-desir-profile.png`,
        }
    ]
}

export default images

