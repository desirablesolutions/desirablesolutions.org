import RootLayout from "@layouts/RootLayout"


const PageLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            {children}
        </RootLayout>
    )

}

export default PageLayout