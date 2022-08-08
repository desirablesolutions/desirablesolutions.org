import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import NavBar from "@includes/Navbar"
import RootLayout from "@layouts/RootLayout"
import MenuNav from "@includes/MenuNav"
import useMeta from "@hooks/useMeta"


const PageLayout = ({ children, pageTitle }) => {

 
    return (
        <RootLayout pageTitle={pageTitle}>
            <MenuNav />
            <FloatingNavigator />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout