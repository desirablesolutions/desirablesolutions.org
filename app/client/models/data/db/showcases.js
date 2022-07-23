import projects from "@db/projects"
import find from "@controllers/utils/find"

const showcases = [

    {
        id: 'projects-showcase',
        cta: {
            name: 'Our Projects'
        },
        title: 'The Showcase.',
        heading: '✒️Designed by masters, inspired by life.',
        latest: [
            {
                ...find({
                    arr: projects,
                    id: 'yonder-airways'
                })
            },
            {
                ...find({
                    arr: projects,
                    id: 'elixir-and-cream-cafe'
                })
            },
            {
                ...find({
                    arr: projects,
                    id: 'green-harvest-farmers-market'
                })
            }
        ],
        featured: {...find({
            arr: projects,
            id: 'yonder-airways'
        }) }
    }
]

export default showcases
