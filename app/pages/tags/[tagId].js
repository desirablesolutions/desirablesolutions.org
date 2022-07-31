import PageLayout from "@layouts/PageLayout"
import tags from "@db/tags"

export default function TagPage({ tagData }) {

    return (

       <PageLayout>

       </PageLayout>
    )
}



export async function getStaticPaths() {

    const paths = tags.map(tag => {
        const tagId = tag.id
        return {
            params: {
                tagId
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
    const tagId = params.tagId

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