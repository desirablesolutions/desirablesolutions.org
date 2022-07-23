import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import ArchitectureIcon from '@mui/icons-material/Architecture';

const actions = [
  { icon: <FileCopyIcon sx={{ color: 'white' }} />, name: 'Top' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function FloatingNavigator() {
  return (

    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        ".MuiSpeedDial-fab": {
          backgroundColor: 'black',
          border: '1px var(--red-800) solid'
        },
        position: 'fixed', bottom: 16, right: 16, border: '2px', zIndex: '9999999999'
      }}
      icon={<ArchitectureIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          tooltipOpen={true}
          icon={action.icon}
          tooltipTitle={<span className="text-white">{action.name}</span>}
        />
      ))}
    </SpeedDial>

  );
}
