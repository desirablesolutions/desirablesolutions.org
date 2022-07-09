import PageLayout from "@layouts/PageLayout"
import CTA from "@includes/CTA"


const HomeLayout = (props) => {

    const { children } = props

    return (

        <PageLayout>
            <CTA/>
            {children}
        </PageLayout>

    )
}

export default HomeLayout