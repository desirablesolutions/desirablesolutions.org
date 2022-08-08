import images from '@db/images'
import find from "@controllers/utils/find"

const team = [
    {
        id: 'joshua-desir',
        name: 'Joshua D. Desir',
        role: 'Founder & Master Designer',
        description: `I am a graphic designer & amateur engineer by trade; and founder of the unique organizational web Inform & Inspire, LLC.`,
        info: [
            "Orlando, FL"
        ],
        profile: find({
            arr: images.people,
            id: 'joshua-desir'
        })
    },
    {
        id: 'jeffrey-desir',
        name: 'Jeffrey J. Desir',
        role: 'Technomancer',
        description: `I am a professional who is passionate about technology. I coordiante, strategize, & innovate solutions & processes our people need.`,
        info: [
            "Atlanta, GA",
        ],
        profile: find({
            arr: images.people,
            id: 'jeffrey-desir'
        })
    }
]

export default team