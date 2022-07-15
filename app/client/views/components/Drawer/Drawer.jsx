import { Drawer as MuiDrawer } from '@mui/material/Drawer';



const Drawer = ({ children, props }) => {

    return (
        <MuiDrawer {...props}>
            {children}
        </MuiDrawer>
    );
}



export default Drawer