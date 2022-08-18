import { Images } from "@db/index"
import makeQueryable from '@utils/makeQueryable'


const data = [
    {
        id: 'joshua-desir',
        name: 'Joshua D. Desir',
        role: 'Founder & Master Designer',
        description: `I am a graphic designer & amateur engineer by trade; and founder of the unique organizational web Inform & Inspire, LLC.`,
        info: [
            "Orlando, FL"
        ],
        profile: []
    },
    {
        id: 'jeffrey-desir',
        name: 'Jeffrey J. Desir',
        role: 'Technomancer',
        description: `I am a professional who is passionate about technology. I coordiante, strategize, & innovate solutions & processes our people need.`,
        info: [
            "Atlanta, GA",
        ],
        profile: []
    }
]

const Team = makeQueryable({ data: data })

export default Team


Team({
    query: {
        property: 'id',
        value: 'joshua-desir',
        limit: 1
    }
})

