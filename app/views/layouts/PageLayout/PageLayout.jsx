import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import Drawer from "@components/Drawer"
import NavBar from "@includes/Navbar"
import RootLayout from "@layouts/RootLayout"



const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            <Drawer />
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