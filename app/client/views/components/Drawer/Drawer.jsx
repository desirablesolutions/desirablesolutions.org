import { Drawer as MuiDrawer } from '@mui/material';



const Drawer = ({ children, props }) => {

    return (
        <MuiDrawer {...props}>
            {children}
        </MuiDrawer>
    );
}



export default Drawer