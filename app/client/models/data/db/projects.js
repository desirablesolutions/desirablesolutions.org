import find from "@controllers/utils/find"
import team from "@db/team"

const projects = [
    {
        id: 'yonder-airways',
        name: 'Yonder Airways',
        status: ["featured"],
        sector: ["Logo Kit"],
        cover: {
            src: '/assets/images/yonder-airways-1.png',
            alt: 'Yonder Airways'
        },
        provisoner: [find({
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
        completed: 'July 15, 2022',
        description: (`Yonder Airways is a travel company that provides a wide range of services to its customers
                       The company is spearheaded by a team of creative and innovative people who are dedicated to providing the best travel 
                       experience to its customers.`)
    },
    {
        id: 'keithandes.me',
        name: 'Keithandes.me',
        collections: ["website"],
    }
]

export default projects