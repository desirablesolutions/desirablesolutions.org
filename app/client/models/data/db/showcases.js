import projects from "@db/projects"
import find from "@controllers/utils/find"

const showcases = [

    {
        id: 'projects-showcase',
        title: 'Our Projects',
        heading: 'Design by masters, inspired by life',
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
                    id: 'yonder-airways'
                })
            },
            {
                ...find({
                    arr: projects,
                    id: 'yonder-airways'
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
