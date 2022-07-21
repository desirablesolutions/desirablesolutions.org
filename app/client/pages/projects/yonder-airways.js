import useMeta from "@hooks/useMeta"
import PageLayout from "@layouts/PageLayout"
import { useEffect } from "react"



export default function YonderAirwaysPage() {

    useEffect(() => {
        useMeta({
            pageTitle: 'Yonder Airways',
        })

    }, [])

    return (
        <PageLayout>

        </PageLayout>
    )
}