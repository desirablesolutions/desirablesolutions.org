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
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function FloatingNavigator() {
  return (

    <SpeedDial
      ariaLabel="SpeedDial basic example"
      fabProps={{
       color: 'error'
      }}
      sx={{
        root: {
          backgroundColor: 'red'
        }, position: 'fixed', bottom: 16, right: 16, border: '2px'
      }}
      icon={<ArchitectureIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={<span className="text-white">{action.name}</span>}
        />
      ))}
    </SpeedDial>

  );
}
