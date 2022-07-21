
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
                }
            ]
        }

    ]
}

export default images

