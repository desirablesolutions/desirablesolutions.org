import { Box as MuiBox } from "@mui/material"



const Box = (props) => {

    let { children } = props

    return (
        <MuiBox>
            {children}
        </MuiBox>
    )
}


export default Box