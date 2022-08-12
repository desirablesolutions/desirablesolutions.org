import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import MenuNav from "@includes/MenuNav"
import NavBar from "@includes/Navbar"
import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"


const PageLayout = ({ children, pageTitle }: ILayout) => {

 
    return (
        <RootLayout pageTitle={pageTitle}>
            <MenuNav />
            <FloatingNavigator />
            <NavBar />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout