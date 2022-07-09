import RootLayout from "@layouts/RootLayout"

const HomeLayout = (props) => {

    const { children } = props

    return (

        <RootLayout>
            {children}

        </RootLayout>

    )
}

export default HomeLayout