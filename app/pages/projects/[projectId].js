

import ProjectLayout from "@layouts/ProjectLayout";
import find from "@utils/find"
import projects from "@db/projects"
import useMeta from "@hooks/useMeta"
import { useEffect } from "react"

export default function ProjectPage({ projectData }) {

    useEffect(() => {
        useMeta({
            pageTitle: projectData.name
        })
    }, [projectData])

    return (
        <ProjectLayout
            title={projectData.name}
            coverImage={{ src: projectData.covers[1].src }}
            accentImage={{ src: projectData.covers[0].src }} />
    )
}


export async function getStaticPaths() {

    const paths = projects.map(project => {
        const projectId = project.id
        return {
            params: {
                projectId
            }
        }
    })

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}



export async function getStaticProps({ params }) {
    const projectId = params.projectId

    const projectData = find({
        arr: projects,
        id: projectId
    })

    console.log(projectData)

    return {
        props: {
            projectData: projectData
        }
    }
}