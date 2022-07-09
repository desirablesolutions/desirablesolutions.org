import Meta from "@includes/Meta"
import CSSReset from "@components/CSSReset"
import Box from "@components/Box"

const RootLayout = (props) => {

    let { children } = props

    return (
        <>
            <Meta />
            <CSSReset />
            <Box>
                {children}
            </Box>
        </>
    )
}

export default RootLayout