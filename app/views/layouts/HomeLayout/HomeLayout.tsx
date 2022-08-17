import PageLayout from "@layouts/PageLayout"
import Hero from "@components/Hero"
import type { ILayout } from "@typings/Layout"


const HomeLayout = ({ children }: ILayout) => {

    return (

        <PageLayout>
            {children}
        </PageLayout>
    )
}

export default HomeLayout