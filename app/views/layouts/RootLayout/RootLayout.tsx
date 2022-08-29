import type { ILayout } from "@typings/Layout"
import React from "react"
import Meta from "@views/includes/Meta"
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

export default React.memo(RootLayout)