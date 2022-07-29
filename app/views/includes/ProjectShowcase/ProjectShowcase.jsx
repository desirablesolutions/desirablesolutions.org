import Showcase from "@components/Showcase"
import showcases from "@db/showcases"
import find from "@controllers/utils/find"


const ProjectShowcase = ({ order }) => {


    return (
        <Showcase
            order={order}
            {...find({
                arr: showcases,
                id: 'projects-showcase'
            })}
        />
    )
}

export default ProjectShowcase