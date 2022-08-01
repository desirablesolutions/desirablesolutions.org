import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import Drawer from "@components/Drawer"
import NavBar from "@includes/Navbar"
import RootLayout from "@layouts/RootLayout"
import MenuNav from "@views/includes/MenuNav"



const PageLayout = ({ children }) => {

    return (
        <RootLayout>
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