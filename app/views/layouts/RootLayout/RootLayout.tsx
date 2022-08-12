import type { ILayout } from "@typings/Layout"

import Meta from "@includes/Meta"
import CSSReset from "@components/CSSReset"
import Box from "@components/Box"

const RootLayout = ({ children, pageTitle }: ILayout) => {


    return (
        <>
            <Meta pageTitle={pageTitle} />
            <CSSReset />
            <Box>
                {children}
            </Box>
        </>
    )
}

export default RootLayout