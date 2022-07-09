import PageLayout from "@layouts/PageLayout"

const HomeLayout = (props) => {

    const { children } = props

    return (

        <PageLayout>
            {children}

        </PageLayout>

    )
}

export default HomeLayout