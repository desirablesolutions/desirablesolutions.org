import PageLayout from "@layouts/PageLayout"
import CTA from "@includes/CTA"
import FadeAnimation from "@components/FadeAnimation"

const HomeLayout = (props) => {

    let { children } = props

    return (
        <PageLayout>
            <CTA />
            <FadeAnimation>
                {children}
            </FadeAnimation>
        </PageLayout>

    )
}

export default HomeLayout