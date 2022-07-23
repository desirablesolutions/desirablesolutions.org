import PageLayout from "@layouts/PageLayout"
import WhoWeAre from "@includes/WhoWeAre"
import FadeAnimation from "@components/FadeAnimation"
import MenuNav from "@includes/MenuNav"

const HomeLayout = (props) => {

    let { children } = props

    return (
        <PageLayout>
            <MenuNav />
            <WhoWeAre />
            <FadeAnimation>
                {children}
            </FadeAnimation>
        </PageLayout>

    )
}

export default HomeLayout