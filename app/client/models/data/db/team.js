import images from '@db/images'
import find from "@controllers/utils/find"

const team = [
    {
        id: 'joshua-desir',
        name: 'Joshua Desir',
        role: 'CEO & Master Designer',
        description: ``,
        info: [
            "Taurus"
        ],
        profile: find({
            arr: images.people,
            id: 'joshua-desir'
        })
    },
    {
        id: 'jeffrey-desir',
        name: 'Jeffrey Desir',
        role: 'Techonomancer',
        description: ``,
        info: [
            "Libra",
            "Atlanta, GA",
        ],
        profile: find({
            arr: images.people,
            id: 'jeffrey-desir'
        })
    }
]

export default team