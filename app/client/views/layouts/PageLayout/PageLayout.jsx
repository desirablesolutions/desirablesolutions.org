import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/Navbar"
import BottomNav from "@includes/BottomNav"

const PageLayout = ({ children }) => {

    return (
        <RootLayout>
            <NavBar />
            {children}
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout