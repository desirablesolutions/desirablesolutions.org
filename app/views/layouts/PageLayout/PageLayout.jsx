import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/Navbar"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import FadeAnimation from "@components/FadeAnimation"
import MenuNav from "@includes/MenuNav"

const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            <FloatingNavigator/>
            <NavBar />
            <MenuNav />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout