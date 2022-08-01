import PageLayout from "@layouts/PageLayout/"
import ProjectsPortfolio from "@includes/ProjectsPortfolio"
import ProofOfModels from "@includes/ProofOfModels"
import ProjectsManifest from "@includes/ProjectsManifest"

export default function ProjectsPage() {

    return (
        <PageLayout>
            <ProjectsPortfolio />
            <ProofOfModels />
            <ProjectsManifest />
        </PageLayout>
    )
}