import useMeta from "@hooks/useMeta"
import ProjectsLayout from "@layouts/ProjectsLayout"
import { useEffect } from "react"



export default function YonderAirwaysPage() {

    useEffect(() => {
        useMeta({
            pageTitle: 'Yonder Airways',
        })

    }, [])

    return (
        <ProjectsLayout>

        </ProjectsLayout>
    )
}