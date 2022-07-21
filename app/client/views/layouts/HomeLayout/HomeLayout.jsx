import PageLayout from "@layouts/PageLayout"
import WhoWeAre from "@includes/WhoWeAre"
import FadeAnimation from "@components/FadeAnimation"
import MenuNav from "@includes/MenuNav"
import FloatingNavigator from "@includes/FloatingNavigator"

const HomeLayout = (props) => {

    let { children } = props

    return (
        <PageLayout>
            <MenuNav />
            <WhoWeAre />
            <FloatingNavigator />
            <FadeAnimation>
                {children}
            </FadeAnimation>
        </PageLayout>

    )
}

export default HomeLayout