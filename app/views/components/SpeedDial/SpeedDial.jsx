import { SpeedDial as MuiSpeedDial } from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';



const SpeedDial = ({ actions }) => {

    return (
        <MuiSpeedDial>
            actions.map((action, index) => (
            <SpeedDialAction key={`${action.name}-${index}`} {...action} />
            ))

        </MuiSpeedDial>
    )
}


export default SpeedDial

