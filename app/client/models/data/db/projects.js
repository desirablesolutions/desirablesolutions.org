import find from "@controllers/utils/find"
import team from "@db/team"
import images from "@db/images"

const projects = [
    {
        id: 'yonder-airways',
        name: 'Yonder Airways',
        status: ["featured"],
        sector: ["Logo Kit"],
        covers: [...find({
            arr: images.projects,
            id: 'yonder-airways'
        }).covers],
        url: '/',
        provisoners: [find({
            arr: team,
            id: 'joshua-desir'
        })],
        tags: [{
            name: 'logo design'
        },
        {
            name: 'graphic design'
        },
        {
            name: 'design system'
        }],
        production: 'July 15, 2022',
        description: (` Yonder Airways is an airline logo identity that communicates its competitive edge 
                        to its audience through a voice that is bold and friendly with a logo that conveys a preferable
                        travel experience for its passengers.`)
    },
    {
        id: 'keithandes.me',
        name: 'Keithandes.me',
        collections: ["website"],
    }
]

export default projects