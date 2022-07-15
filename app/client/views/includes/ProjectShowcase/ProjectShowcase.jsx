import Showcase from "@components/Showcase"

const projects = {
    featured: {
        name: 'Yonder Airways',
        cover: '',
        description: '',
        tags: []
    },

    latest: [
        {
            name: 'Ststephenspresbyterian.com',
            cover: ''
        },
        {
            name: 'Naturessecret.co'
        },
        {
            name: 'Keithandes.me',
            cover: '',
        }
    ]
}



const ProjectShowcase = () => {

    return (
        <Showcase issueId="01"
                   title="Our Projects"/>
    )
}

export default ProjectShowcase