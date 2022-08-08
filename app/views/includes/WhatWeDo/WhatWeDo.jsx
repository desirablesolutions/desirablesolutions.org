import Hero from "@components/Hero"
import heros from "@db/heros"
import find from "@utils/find"

const WhatWeDo = () => {

    const WhatWeDo = find({
        arr: heros,
        id: 'what-we-do'
    }).data

    return (
        <Hero  {...WhatWeDo} />
    )
}

export default WhatWeDo