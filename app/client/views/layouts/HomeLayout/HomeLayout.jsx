import PageLayout from "@layouts/PageLayout"
import WhoWeAre from "@includes/WhoWeAre"
import FadeAnimation from "@components/FadeAnimation"


const HomeLayout = (props) => {

    let { children } = props

    return (
        <PageLayout>
            <WhoWeAre />
            <FadeAnimation>
                {children}
            </FadeAnimation>
        </PageLayout>

    )
}

export default HomeLayout