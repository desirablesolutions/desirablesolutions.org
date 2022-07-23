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
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


const actions = [
  { icon: <WorkOutlineIcon sx={{ color: 'var(--red-300)' }} />, name: 'Projects' },
  { icon: <SaveIcon sx={{ color: 'var(--red-300)' }}  />, name: 'Info' },
  { icon: <GroupIcon sx={{ color: 'var(--red-300)' }} />, name: 'Team' },
  { icon: <CardGiftcardIcon sx={{ color: 'var(--red-300)' }}/>, name: 'Showcase' },
  { icon: <ArrowCircleUpIcon sx={{ color: 'var(--red-300)' }} />, name: 'Top' }
];

export default function FloatingNavigator() {
  return (

    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        ".MuiSpeedDial-fab": {
          backgroundColor: 'black',
          border: '1px var(--red-800) solid',
          "&:hover": {
            backgroundColor: 'var(--gray-700)',
            border: '1px var(--red-200) solid',
          },
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
          tooltipTitle={<span className="text-black">{action.name}</span>}
        />
      ))}
    </SpeedDial>

  );
}
