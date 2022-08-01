import PageLayout from "@views/layouts/PageLayout"
import team from "@db/team"

export default function TeamMemberPage() {


    return (
        <PageLayout>

        </PageLayout>
    )
}



export async function getStaticPaths() {

    const paths = team.map(member => {
        const memberId = member.id
        return {
            params: {
                memberId
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
    const memberId = params.memberId

    const teamData = find({
        arr: team,
        id: memberId
    })

    console.log(teamData)

    return {
        props: {
            teamData: teamData
        }
    }
}