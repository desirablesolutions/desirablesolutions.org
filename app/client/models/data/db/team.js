import images from '@db/images'
import find from "@controllers/utils/find"

const team = [
    {
        id: 'joshua-desir',
        name: 'Joshua D. Desir',
        role: 'CEO & Master Designer',
        description: `I am a graphic designer & amateur engineer by trade; and founder of the unique organizational web Inform & Inspire, LLC.`,
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
        name: 'Jeffrey J. Desir',
        role: 'Techonomancer',
        description: `I am a techonomancer, a person who is passionate about technology. I coordiante, strategize, & innovate solutions & processes our people need.`,
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