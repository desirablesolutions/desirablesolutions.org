import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/Navbar"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"

const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            <FloatingNavigator/>
            <NavBar />
            {children}
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout