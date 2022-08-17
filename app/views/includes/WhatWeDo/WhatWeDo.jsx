import Hero from "@components/Hero"
import heros from "@models/data/db/herosata/db/heros"

const WhatWeDo = () => {

    const whatWeDo = heros({
        query: {
            id: 'what-we-do'
        }
    })

    return (
        <Hero {...whatWeDo} />
    )
}

export default WhatWeDo