import useMeta from "@hooks/useMeta"
import ProjectsLayout from "@layouts/ProjectsLayout"
import { useEffect } from "react"



export default function YonderAirwaysPage() {

    useMeta({
        pageTitle: 'Yonder Airways',
    })

    return (
        <ProjectsLayout title={"Yonder Airways"}>

        </ProjectsLayout>
    )
}