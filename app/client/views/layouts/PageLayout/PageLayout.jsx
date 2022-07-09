import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/Navbar"

const PageLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <NavBar />
            {children}
        </RootLayout>
    )

}

export default PageLayout