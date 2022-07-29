import Gallery from "@components/Gallery"
import galleries from "@db/galleries"

const TeamGallery = ({ order }) => {

    return (
        <Gallery
            order={order}
            {...galleries[0]} />
    )
}

export default TeamGallery