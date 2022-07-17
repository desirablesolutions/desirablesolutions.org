import Showcase from "@components/Showcase"

const projects = {
    featured: {
        name: 'Yonder Airways',
        cover: '',
        description: '',
        img: {
            src: ''
        },
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
        <Showcase id="01"
            name="Our Projects"
            title="Designed by masters, inspired by life"
            featured={{
                name: 'Yonder Airways',
                description: '',
                cover: {
                    src: '/assets/images/yonder-airways-1.png',
                    alt: 'Yonder Airways'
                },
                tags: [{
                    name: 'logo kit'
                }],
                sector: 'Brand Kit',
                completed: 'March 25, 2022',
                provisoner: {
                    name: 'Joshua Desir',
                    avatar: ''
                }
            }}
        />
    )
}

export default ProjectShowcase