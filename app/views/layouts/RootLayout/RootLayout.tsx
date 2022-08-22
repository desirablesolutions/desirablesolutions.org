import type { ILayout } from "@typings/Layout"

import Meta from "@includes/Meta"
import CSSReset from "@components/CSSReset"
import Box from "@components/Box"

const RootLayout = ({ children, metaData }: ILayout) => {


    return (

        <Box>
            <Meta {...metaData} />
            <CSSReset />
            {children}
        </Box>

    )
}

export default RootLayout