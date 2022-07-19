import Showcase from "@components/Showcase"
import projects from "@db/projects"



const yonderAirways = projects[0]

const ProjectShowcase = ({ order }) => {


    return (
        <Showcase
            order={order}
            name="Our Projects"
            title="Designed by masters, inspired by life"
            featured={{
                name: yonderAirways.name,
                description: yonderAirways.description,
                cover: {
                    src: '/assets/images/yonder-airways-1.png',
                    alt: 'Yonder Airways'
                },
                tags: yonderAirways.tags,
                sector: 'Brand Kit',
                completed: yonderAirways.completed,
                provisoner: {
                    name: 'Joshua Desir',
                    avatar: ''
                }
            }}
        />
    )
}

export default ProjectShowcase