import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/Navbar"
import BottomNav from "@includes/BottomNav"

const PageLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <NavBar />
            {children}
            <BottomNav />
        </RootLayout>
    )

}

export default PageLayout