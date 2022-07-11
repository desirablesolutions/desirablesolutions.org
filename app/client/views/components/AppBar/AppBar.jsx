import { default as MuiAppBar } from '@mui/material/AppBar';



const AppBar = (props) => {

    let { children } = props

    return (

        <MuiAppBar>
            {children}
        </MuiAppBar>
    )
}

export default AppBar