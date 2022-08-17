import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import MenuNav from "@includes/MenuNav"
import NavBar from "@includes/Navbar"
import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"


const PageLayout = ({ children, metaData }: ILayout) => {


    return (

        <RootLayout metaData={metaData}>
            <MenuNav />
            <FloatingNavigator />


            <NavBar />
            <FadeAnimation>
                {children}


                <BottomNav />
            </FadeAnimation>
        </RootLayout>
    )

}

export default PageLayout