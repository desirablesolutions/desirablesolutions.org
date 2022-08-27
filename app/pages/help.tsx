import PageLayout from "@layouts/PageLayout"
import type { IPage } from "@typings/Page"


const HelpPage: IPage = ({ pageData }) => {

    return (

        <PageLayout>


        </PageLayout>
    )
}

export async function getStaticProps() {

    let pageData = {}


    return {
        props: {
            pageData: pageData
        }
    }
}