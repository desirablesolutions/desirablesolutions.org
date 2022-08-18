import team from "@db/team"
import images from "@db"
import makeQueryable from "@utils/makeQueryable"
import type { IProject } from "@typings/Project"

const projectsData = [{
    id: 'yonder-airways',
    name: 'Yonder Airways',
    status: ["featured"],
    services: ["Logo Kit"],
    covers: [images.projects],
    url: '/projets/yonder-airways',
    provisoners: [team({
        query: {
            property: 'id',
            value: 'joshua-desir',
            limit: 0
        }
    })],
    tags: [],
    production: 'July 15, 2022',
    impressum: 'A friendly travel company for a friendlier world.',
    description: (` Yonder Airways is an airline logo identity that communicates its competitive edge 
                    to its audience through a voice that is bold and friendly with a logo that conveys a preferable
                    travel experience for its passengers.`)
}]


const projects = makeQueryable({ data: projectsData })
export default projects