import Hero from "@components/Hero"
import heros from "@db/heros"
import find from "@utils/find"

const WhoWeAre = ({ order }) => {

    const whoWeAreData = find({
        arr: heros,
        id: 'who-we-are'
    }).data

    return (
        <Hero order={order} {...whoWeAreData} />
    )
}

export default WhoWeAre