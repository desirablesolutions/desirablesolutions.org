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
        url: '/projects/yonder-airways',
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
        id: 'elixir-and-cream-cafe',
        name: 'Elixir and Cream',
        status: ["Production"],
        sector: ["Brand Kit"],
        covers: [...find({
            arr: images.projects,
            id: 'elixir-and-cream-cafe'
        }).covers],
        url: '/projects/elixir-and-cream',
        provisioners: [find({
            arr: team,
            id: 'joshua-desir'
        })],
        description: (`
        Elixir and Cream is a brand identity that is a combination of two complementary elements:`)
    },
    {
        id: 'green-harvest-farmers-market',
        name: 'Green Harvest Farmers Market',
        status: ["featured"],
        sector: ["Logo Kit"],
        covers: [...find({
            arr: images.projects,
            id: 'yonder-airways'
        }).covers],
        url: '/projects/yonder-airways',
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
        description: (`.`)
    },
    {
        id: 'elixir-and-cream',
        name: 'Elixir and Cream',
        status: ["featured"],
        sector: ["Logo Kit"],
        covers: [...find({
            arr: images.projects,
            id: 'yonder-airways'
        }).covers],
        url: '/projects/yonder-airways',
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
        description: (`.`)
    },
    {
        id: 'allure',
        name: 'Allure',
        status: ["featured"],
        sector: ["Logo Kit"],
        covers: [...find({
            arr: images.projects,
            id: 'yonder-airways'
        }).covers],
        url: '/projects/yonder-airways',
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
        description: (`.`)
    },
    {
        id: 'keithandes.me',
        name: 'Keithandes.me',
        provisioners: [find({
            arr: team,
            id: 'joshua-desir'
        })],
        covers: [""],
        collections: ["website"],
    },
]

export default projects